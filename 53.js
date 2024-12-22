var maxSubArray = function(nums)
 {

    let sum=nums[0]
    let max_sum=nums[0]

    for(let i=1; i<nums.length; i++)
    {
        sum=Math.max(nums[i],sum+nums[i])
        max_sum=Math.max(max_sum,sum)

    }
    
    return max_sum
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))