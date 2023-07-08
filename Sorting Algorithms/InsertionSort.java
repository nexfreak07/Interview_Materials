package Sorting_Algorthms;

import java.util.Arrays;

public class InsertionSort
{
    public static void insertionSort(int arr[]){
        for(int FUI=1 ;FUI<arr.length; FUI++)
        {
            int key = arr[FUI];
            int i;
            for( i=FUI-1; i>=0 && arr[i]> key; i--)
            {
                arr[i+1] = arr[i];
            }
            arr[i+1] = key;
        }
    }
    public static void insertionRecursive(int arr[], int n)
    {
        if(n<1)
            return;
        insertionRecursive(arr, n-1);
        int key = arr[n];
        int i;
        for(i=n-1; i>=0 && arr[i] > key; i--)
        {
            arr[i+1] = arr[i];
        }
        arr[i+1] = key;
    }
    public static void main(String[] args) {
        int arr[] = {9,1,7,2,3,7,6,3,7,0,2};
        insertionSort(arr);
        System.out.println("General Insertion Sort -> "+ Arrays.toString(arr));
        int arr1[] = {9,1,7,2,3,7,6,3,7,0,2};
        insertionRecursive(arr1, arr.length-1);
        System.out.println("Recursive Insertion Sort -> "+ Arrays.toString(arr1));

    }
}
