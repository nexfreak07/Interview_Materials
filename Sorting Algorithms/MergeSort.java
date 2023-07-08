package Sorting_Algorthms;

import java.util.Arrays;

public class MergeSort {

    public static  void merge(int arr[], int l, int mid, int r)
    {
        int i = l;
        int j = mid+1;
        int k = 0;
        int temp [] = new int [r-l+1]; // Create Array From Params

        while(i<=mid && j<=r)
        {
            if(arr[i]<arr[j])
            {
                temp[k++] = arr[i++];
            }
            else
            {
                temp[k++] = arr[j++];
            }
        }
        while(i<=mid)
        {
            temp[k++] = arr[i++];
        }
        while(j<=r)
        {
            temp[k++] = arr[j++];
        }
        for(int c=0; c<temp.length; c++)
        {
            arr[l+c] = temp[c]; // Take the low from params
        }
    }
    public static void mergeSort(int arr[], int l, int h){
        if(l<h) {
            int mid = (l + h) / 2;
            mergeSort(arr, l, mid);
            mergeSort(arr, mid + 1, h);
            merge(arr, l, mid, h);
        }
    }
    public static void main(String[] args) {
        int arr[] = {9,1,4,2,3,7,6,3,7,0,2};
        mergeSort(arr, 0, arr.length-1);
        System.out.println("After Merge Sort -> " + Arrays.toString(arr));
    }
}
