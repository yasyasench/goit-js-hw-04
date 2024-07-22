const profile ={
  username:"Jacob",
  playtime:300,
  changeUsername(newUsername){
    this.username=newUsername;
  },
  updatePlayTime(hours){
    this.playtime += hours;
  },
  getInfo(){
    return `${this.username} has ${this.playtime} active hours!`;
  },
}


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"