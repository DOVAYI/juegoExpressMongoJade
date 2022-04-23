window.addEventListener('DOMContentLoaded',
    async (e) => {
        
            
        const response = await fetch('http://localhost:3000/gamerAll').catch(err => console.log(err));
        const jsonData = await response.json();
        const loadDate= document.getElementById('mostrar');
        
        for(i=0;i<jsonData.length;i++){
            loadDate.innerHTML+=jsonData[i].name
        }

        
        console.log(jsonData);
    })