#include <stdio.h>
#include <stdlib.h>
#include <omp.h>
#include <memory.h>





int main (int argc, char *argv[]){
    int thread_count = strtol(argv[1],NULL,10);
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
#pragma omp parallel for default(none) private(i,j) shared(n,a,temp) reduction(+:count) num_threads(thread_count)
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
#pragma omp parallel for private(y) shared(n,a,temp) num_threads(thread_count)
        for(y=0; y<n; y++){
            a[i]=temp[i];
        }

    }


    for(int printer=0; printer<n; printer++){
        printf("%d", a[printer]);

    }



}