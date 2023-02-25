function btnSubmit(){
    alert("fidfkdkfskj");
}

window.onload = () =>
{
    (async () => {
        await fetch("http://127.0.0.1:2001/api/index", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
        }).then(function (response) {
          if (response.status == 400) {
            window.location = "./index";
          }
          return response.json();
        });
      })();
}