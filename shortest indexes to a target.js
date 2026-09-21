let nums = [2,3,1,5,6,3]
let target=7;
let left=0;
let right=nums.length;
let sum=0;
let min=Infinity
let check=0;
for(i=0;i<nums.length;i++){
  sum=sum+nums[i];
  while(sum >=target){
    min=Math.min(min,i-left+1)
    if(sum==target){
      check=1
    }
    sum=sum-nums[left];
    
    left++;
   
    
  }
}
if(min === Infinity){
  console.log(0)
} else {
  console.log(min)
}


