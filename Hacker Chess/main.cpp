
//#include <bits/stdc++.h>
#include <string>
#include <vector>
#include <iostream>

using namespace std;

/*
 * Complete the verticalRooks function below.
 */
string verticalRooks(vector<int> r1, vector<int> r2) {
    // initializing variables
    int r1_count =  r1.size();
    int r2_count = r2.size();
    int nimsum = 0;
    int distance[r1_count];
    int j;
    int i;
    int countones=0;
    // getting distance between r1 and r2 for each respective column
    for(j=0; j<r2_count; j++){
        distance[j] = abs(r1[j] - r2[j])-1;
    }
    // xor'ing every respective bit in distance to come up with the nimsum
    for(i=0; i < r1_count; i++){
        nimsum ^= distance[i];
    }


    //counting number of ones in nimusum
    while(nimsum > 0){
        countones += nimsum &1;
        nimsum = nimsum >> 1;
    }
    if(countones > 0) {
        return "player-2";

    }
    else {
        return "player-1";
    }

}

int main()
{
//    ofstream fout(getenv("OUTPUT_PATH"));

    int t;
    cin >> t;
    //cin.ignore(numeric_limits<streamsize>::max(), '\n');

    for (int t_itr = 0; t_itr < t; t_itr++) {
        int n;
        cin >> n;
        //cin.ignore(numeric_limits<streamsize>::max(), '\n');

        vector<int> r1(n);

        for (int r1_itr = 0; r1_itr < n; r1_itr++) {
            int r1_item;
            cin >> r1_item;
            //cin.ignore(numeric_limits<streamsize>::max(), '\n');

            r1[r1_itr] = r1_item;
        }

        vector<int> r2(n);

        for (int r2_itr = 0; r2_itr < n; r2_itr++) {
            int r2_item;
            cin >> r2_item;
            //cin.ignore(numeric_limits<streamsize>::max(), '\n');

            r2[r2_itr] = r2_item;
        }

        string result = verticalRooks(r1, r2);

        // fout << result << "\n";
        cout << result << "\n";
    }

    // fout.close();

    return 0;
}
