// task - 1
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = []
    let i = 0; j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i++])
        } else {
            arr.push(nums2[j++])
        }
    }
    while (i < nums1.length) arr.push(nums1[i++])
    while (j < nums2.length) arr.push(nums2[j++])
    let mid = Math.floor(arr.length / 2)
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2
    } else {
        return arr[mid]
    }
};

// task - 2
var mergeList = function (l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    if (l1.val < l2.val) {
        l1.next = mergeList(l1.next, l2)
        return l1
    } else {
        l2.next = mergeList(l1, l2.next)
        return l2
    }
}
var mergeKLists = function (lists) {
    let ans = null
    for (let i = 0; i < lists.length; i++) {
        ans = mergeList(ans, lists[i])
    }
    return ans
};

// task - 3


// task - 4

// task - 5
