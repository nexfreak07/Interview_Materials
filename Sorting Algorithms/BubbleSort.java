package Sorting_Algorthms;

import java.util.Arrays;

public class BubbleSort {
    public static void swap(int arr[], int i, int j){
        if(i==j)
            return;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    public static void bubbleSort(int arr[]){
        for(int LUI=arr.length-1; LUI>=0; LUI--)
        {
            for(int j=0; j<LUI; j++)
            {
                if(arr[j]> arr[j+1])
                {
                    swap(arr,j, j+1);
                }
            }
        }
    }

    public static void bubbleSortRecusive(int arr[], int n) {
        if(n==0)
            return;
        for(int i=0; i<n; i++)
        {
            if(arr[i]> arr[i+1])
            {
                swap(arr,i, i+1);
            }
        }
        bubbleSortRecusive(arr,n-1);
    }
    public  static void main(String[] args) {
       int arr[] = {9,1,4,2,3,7,6,3,7,0,2};
       bubbleSort(arr);
       System.out.println(" General Bubble Sort ->" + Arrays.toString(arr));
        int arr1[] = {9,1,4,2,3,7,6,3,7,0,2};
        bubbleSortRecusive(arr1, arr1.length-1);
        System.out.println("Recursive Bubble Sort -> "+ Arrays.toString(arr1));

    }
}
