package Sorting_Algorthms;

import java.util.Arrays;

public class SelectionSort {
    public static void swap(int arr[], int i, int j){
        if(i==j)
            return;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    public static void selectionSort(int arr[]){
        for(int LUI=arr.length-1; LUI>=0; LUI--)
        {
            int largest = 0;
            for(int j=1; j<=LUI; j++){
                if(arr[j]>arr[largest]){
                    largest = j;
                }
                swap(arr,LUI, largest);
            }
        }
    }
    public static void selectionSortRecursive(int arr[], int n)
    {
        if(n==0)
            return;
        int largest = 0;
        for(int i=1; i<=n; i++)
        {
            if(arr[i]>arr[largest])
                largest = i;
        }
        swap(arr,n,largest);
        selectionSortRecursive(arr, n-1);
    }
    public static void main(String[] args) {
        int arr[] = {9,1,4,2,3,7,6,3,7,0,2};
        selectionSort(arr);
        System.out.println("General Selection Sort -> " + Arrays.toString(arr));
        int arr1[] = {9,1,4,2,3,7,6,3,7,0,2};
        selectionSortRecursive(arr1,arr1.length-1);
        System.out.println("Recursive Selection Sort -> " + Arrays.toString(arr1));
    }
}
