export const adddrug = ()=>{
    return{
    type:"add to favourite",
    payload:"ahmed",
    }
}
export const removedrug = (drugid)=>{
    return{
    type:"remove from favourite",
    drugid,
    }


}