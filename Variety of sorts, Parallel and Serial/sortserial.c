#include <stdio.h>
#include <stdlib.h>
#include <omp.h>
#include <memory.h>





int main (int argc, char *argv[]){
    int n = strtol(argv[2],NULL,10);
    int a[n];
    int z;


    for( z=0; z<n; z++){
        a[z]= rand()%100 +1;
        int y;
        int i;
        int j;
        int count;
        int* temp = malloc(n*sizeof(int));

        for (i = 0; i < n; i++) {
            count = 0;
            for (j = 0; j < n; j++)
                if (a[j] < a[i]) {
                    count++;
                }
                else if (a[j] == a[i] && j < i) {
                    count++;
                }
            temp[count] = a[i];
        }
        memcpy(a, temp, n*sizeof(int));
        free(temp);
    }


   

}