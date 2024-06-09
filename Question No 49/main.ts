function myhobbies (
    ...hobbies : string[]
){
    hobbies.forEach(hobby=> {
        console.log(`I enjoy ${hobby}`);
        
    });
}
myhobbies("reading","coding","painting")