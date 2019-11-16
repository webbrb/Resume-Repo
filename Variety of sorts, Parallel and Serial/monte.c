#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <memory.h>
#include <omp.h>


double randomX(){
    double F = ((double) rand())/ (double) RAND_MAX;
    //printf("%f ", F);
    return (2*(F))-1;
}

double square(double b){
    double z;
    z = b*b;
    return z;
}

double montecarlo(int numberOfTosses, int thread_count){

    int numberInCircle = 0;
#pragma omp parallel for default(none) private(toss, x, y, distance_squared) shared (numberOfTosses) reduction(+ : numberInCircle) num_threads(thread_count)
    for (int toss = 0; toss < numberOfTosses; toss++) {
        double x = randomX();
        double y = randomX();
        double distance_squared = (square(x)) + (square(y));
//        printf("\n");
  //      printf("y is %f", y );
    //    printf("\n");
      //  printf("distance is %f", distance_squared );
        //printf("\n");

        if (distance_squared <= 1) {
            numberInCircle++;
            // make this a critical section or a reduction?
        }
    }
    double pi_estimate = (4 * numberInCircle)/((double) numberOfTosses);
    return pi_estimate;

}


int main( )
{
    double final;
    srand(time(NULL));
    printf("Hello, World!\n");
    final = montecarlo(1000,4);
    printf("%f",final);
    return 0;
}