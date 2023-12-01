// Function to set the cookies
function setGroupCookies(memberOf, managerOf) {
   document.cookie = `memberOf=${JSON.stringify(memberOf)}; path=/`;
   document.cookie = `managerOf=${JSON.stringify(managerOf)}; path=/`;
}

// Function to get the cookies
function getGroupCookies() {
   const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
   const groupCookies = cookies.filter(cookie => cookie[0] === "memberOf" || cookie[0] === "managerOf");

   const groups = {};

   for (const cookie of groupCookies) {
       groups[cookie[0]] = JSON.parse(cookie[1]);
   }

   return groups;
 login
}



setGroupCookies('Knights, Clubs, Studying', 'knights');

function onAddGroup() {
   console.log(document.cookie)
 main
}