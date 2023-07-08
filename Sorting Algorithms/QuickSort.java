package Sorting_Algorthms;

import java.util.Arrays;

public class QuickSort {
    public static void quickSort(int arr[], int low, int high)
    {
        if(low<high)
        {
            int pivotIndex = partition(arr,low,high);
            quickSort(arr,low,pivotIndex);
            quickSort(arr,pivotIndex+1, high);
        }
    }
    public static int partition(int arr[],  int low, int high)
    {
        int i = low;
        int j = high;
        int pivot = arr[low];
        while(i<j)
        {
            while(i<j && arr[--j]>=pivot);
            if(i<j){
                arr[i] = arr[j];
            }
            while(i<j && arr[++i]<=pivot);
            if(i<j){
                arr[j] = arr[i];
            }

        }
        arr[j] = pivot;
        return j;
    }
    public static void main(String[] args) {
        int arr[] = {9,1,4,2,3,7,6,3,7,0,2};
        quickSort(arr,0,arr.length);
        System.out.println("Array after QuickSort -> "+ Arrays.toString(arr));
        
    }
}
