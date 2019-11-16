#include <stdio.h>
#include <memory.h>
#include <ctype.h>
#include "events.h"
#include "rtp.h"
#include <string.h>
/*
 *     +---------+
 *     | Layer 5 |    <- to_layer_5(A|B, message) passes message UP to layer 5
 *     +---------+
 *     | Layer 4 |
 *     +---------+
 *     | Layer 3 |    <- to_layer_3(A|B, packet) passes a packet to be sent to A|B
 *     +---------+
 *     | Layer 2 |
 *     +---------+
 *     | Layer 1 |
 *     +---------+
 */

// GLOBAL VARIABLES

#define VERBOSE 1

static unsigned short int next_packet_seq_nbr = 0;

union Packet dup_packet_A;   // duplicate of last packet sent from A
unsigned short int last_seq_nbr_A = 0;

unsigned short int acknum = 0;

// END GLOBAL VARIABLES


// UTILITY FUNCTIONS:
// Return the checksum for a packet
static unsigned short int checksum_for(union Packet packet);

// Print a message on the standard output stream
static void print_message(struct Message message);

// Print a packet on the standard output stream
static void print_packet(union Packet packet);


/********* STUDENTS WRITE THE NEXT EIGHT ROUTINES *********/
/*
 * Note: A is the sender, B the receiver.
 */


static unsigned short int checksum_for(union Packet packet) {
    unsigned int sum = 0;           // 32-bit sum
    unsigned short int result;

    // TODO
    //going through array and summing all of the bits

    for(int i=0; i < 13; i++ ){
        sum += packet.chunk[i];
        if(sum > 65536){
            sum = (sum % 65536) +1;
        }
         //deal with overflow here? pg 205
    }

    result = (unsigned short int)((~sum));
    return result;
}


/* called from layer 5, passed the data to be sent to other side */
/*
 * This routine will be called whenever the upper layer at the
 * sending side (A) has a message to send. It is the job of
 * your protocol to insure that the data in such a message
 * is delivered in-order, and correctly, to the receiving
 * side upper layer.
 */
void A_output(struct Message message) {
    if (VERBOSE) {
        printf("%f: A_output(", sim_time);
        print_message(message);
        printf(")\n");
    }
    union Packet packet;
    // Build a packet from message
    last_seq_nbr_A; //seq num
    acknum = next_packet_seq_nbr;


    packet.fields.seqnum = next_packet_seq_nbr;
    packet.fields.acknum = acknum;
    packet.fields.checksum = 0;


    memcpy(packet.fields.payload, &message, MSG_DATA_SIZE);


    packet.fields.checksum = checksum_for(packet);;



    to_layer_3(0,packet);
    start_timer(0, 25.0);

    dup_packet_A = packet;









    last_seq_nbr_A = next_packet_seq_nbr;
    next_packet_seq_nbr = ~next_packet_seq_nbr;




    // Transport the packet to Host B
    if (VERBOSE) {
        printf("Time %f: to_layer_3(B, ", sim_time);
        print_packet(packet);
        printf(")\n");
    }


}

void B_output(struct Message message)  /* need be completed only for extra credit */
{
    if (VERBOSE) {
        printf("Time %f: B_output(", sim_time);
        print_message(message);
        printf(")\n");
    }
    // TODO
}

/* called from layer 3, when a packet arrives for layer 4 */
/*
 * This routine will be called whenever a packet sent from the B-side
 * (i.e., as a result of a to_layer_3() being done by a B-side procedure)
 * arrives at the A-side. packet is the (possibly corrupted) packet
 * sent from the B-side.
 */
void A_input(union Packet packet) {
    if (VERBOSE) {
        printf("Time %f: A_input(", sim_time);
        print_packet(packet);
        printf(")\n");
    }
    // TODO


     //only receiving ack packets from the B side
    // we check the checksum and change the sequence number from 0 to 1 or vice versa and the ack number
    //stop_timer(A);
    //check to see if acknum == last _seq nbr
     if (checksum_for(dup_packet_A) == checksum_for(packet) && packet.fields.acknum == last_seq_nbr_A ){
        printf("thats the right acknum muh dude");
        stop_timer(0);
    } else{
         struct Message message;
         memcpy(&message, dup_packet_A.fields.payload, MSG_DATA_SIZE);
         stop_timer(0);
         A_output(message);
     }


    //if not resend the packet with A_output
}

/* called when A's timer goes off */
/*
 * This routine will be called when A's timer expires (thus generating
 * a timer interrupt). You'll probably want to use this routine to
 * control the retransmission of packets.
 * See start_timer() and stop_timer() below for how the timer is
 * started and stopped.
 */
void A_timer_interrupt() {
    if (VERBOSE) {
        printf("%f: A_timer_interrupt()\n", sim_time);
    }
    //todo
    //restart timer to 0 and stop the timer


    to_layer_3(0,dup_packet_A);

    start_timer(A, 25.0);


}

/* The following routine will be called once (only) before any other */
/* entity A routines are called. You can use it to do any initialization */
/*
 * This routine will be called once, before any of your other A-side
 * routines are called. It can be used to do any required initialization.
 */
void A_init() {
    if (VERBOSE) {
        printf("%f: A_init()\n", sim_time);
    }

    // Test checksum -- code for debugging
    if (VERBOSE) {
        printf("Testing checksum_for a packet...\n");

//        union Packet p = {{1, 1, 0, {0x40, 0x00, 0x40, 0x00,
//                                     0x40, 0x00, 0x40, 0x00,
//                                     0x40, 0x00, 0x40, 0x00,
//                                     0x40, 0x00, 0x40, 0x00,
//                                     0x40, 0x00, 0x40, 0x00}}};

        // Note how the checksum field starts at 0
        union Packet q = {{0x0004,
                           0xfffe,
                           0x0000,
                           {0x69, 0x6e, 0x64, 0x69, 0x73, 0x74, 0x69, 0x6e, 0x67, 0x75,
                             0x69, 0x73, 0x68, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79}}};


        q.fields.checksum = checksum_for(q);
        print_packet(q);
        printf("\n*** Checksum: %hu\n", checksum_for(q));
    }

}


/* Note that with simplex transfer from A-to-B, there is no B_output() */

/* called from layer 3, when a packet arrives for layer 4 at B */
/*
 * This routine will be called whenever a packet sent from the A-side
 * (i.e., as a result of a to_layer_3() being done by a A-side procedure)
 * arrives at the B-side. packet is the (possibly corrupted) packet sent
 * from the A-side.
 */
void B_input(union Packet packet) {
    if (VERBOSE) {
        printf("%f: B_input(", sim_time);
        print_packet(packet);
        printf(")\n");
    }

    if (VERBOSE && checksum_for(packet) != 0) {
        printf("CHECKSUM ERROR: ");
        print_packet(packet);
        putchar('\n');
    }

    // Assume no corruption or packet loss
    // Send an ACK
    union Packet ack_packet;
    ack_packet.fields.seqnum = packet.fields.seqnum;
    ack_packet.fields.acknum = packet.fields.seqnum;
    ack_packet.fields.checksum = 0;
    memcpy(ack_packet.fields.payload, "ACK_________________", 20);
    ack_packet.fields.checksum = checksum_for(ack_packet);





    if (checksum_for(dup_packet_A) == checksum_for(packet) && packet.fields.acknum == last_seq_nbr_A ){
        printf("thats the right acknum muh dude");

    } else{
        printf("wait for timeout");
        return;
    }
    to_layer_3(B, ack_packet);
    to_layer_5(B, packet.fields.payload);
}

/* called when B's timer goes off */
void B_timer_interrupt() {
    if (VERBOSE) {
        printf("%f: A_timer_interrupt()\n", sim_time);
    }

    to_layer_3(1,dup_packet_A);
    start_timer(1, 10.0);
}


/*
 * This routine will be called once, before any of your other B-side
 * routines are called. It can be used to do any required initialization.
 */
void B_init() {
    if (VERBOSE) {
        printf("%f: B_init()\n", sim_time);
    }
    // TODO
}


// STATIC UTILITY FUNCTIONS

static void print_message(struct Message message) {
    printf("Message[\"");
    for (int i = 0; i < MSG_DATA_SIZE; ++i) {
        printf("%c", isprint(message.data[i]) ? message.data[i] : '`');
    }
    printf("\"]");
}

static void print_packet(union Packet packet) {
    printf("[#%d| %d 0x%04x ", packet.fields.seqnum,
           packet.fields.acknum,
           packet.fields.checksum);
    putchar('"');
    for (int i = 0; i < MSG_DATA_SIZE; ++i) {
        printf("%c", isprint(packet.fields.payload[i]) ? packet.fields.payload[i] : '`');
    }
    printf("\"]");
}
