function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
function bubbleSort(array) {
    for (var i=0; i< array.length; i++) {
        for (var j=0; j<array.length-i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
        console.table(array);
    }return array;
}
// console.log(bubbleSort([6,1,5,3]));

// SELECTION SORT
function selectionSort(arr){
    var i, j, min_idx;
    n=arr.length;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++){
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        if (i != min_idx) swap(arr,min_idx, i);
        console.log(arr);
    }
    return arr
}

// INSERTION SORT
function insertionSort(arr){
    let key, j; 
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        j=i-1;
        while(j>=0 &&arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key;
        console.log(arr);
    }return arr;
}

// Quick SORT
function quickSort(items) {
    return quickSortHelper(items, 0, items.length-1);
}
function quickSortHelper(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);  
        if (left < index - 1) {
            quickSortHelper(items, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(items, index, right);
        }
    }return items;
}
function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
         left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
        var temp = array[left];
        array[left] = array[right];
        array[right]= temp;
        left++;
        right--;
        }
    }
    return left;
}   

// MERGE SORT
function merge(leftA, rightA){
    console.log(leftA,rightA)
    var results= [], leftIndex= 0, rightIndex= 0;
   
    while (leftIndex < leftA.length && rightIndex < rightA.length) {
        if( leftA[leftIndex]<rightA[rightIndex] ){
            results.push(leftA[leftIndex++]);
        } else {
            results.push(rightA[rightIndex++]);
        }
    }
    var leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);
    // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {

    if(array.length<2){
        return array; // Base case: array is now sorted since it's
    }
    var midpoint = Math.floor((array.length)/2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);
   
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
 
console.log( mergeSort([6,1,23,4,2,3]));
