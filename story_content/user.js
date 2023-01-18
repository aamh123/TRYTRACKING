function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oMEsibWsw3":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx7IKkI-jeDOmJnov3C_G1ArSLDxIOoMc0EpEMkUDi9y0ymBRVd3Y4XRWPXjO9ZltRZew/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({l1q1attempts:player.GetVar("l1q1attempts"),l1q2attempts:player.GetVar("l1q2attempts"),l1q2answeredcorrect:player.GetVar("l1q2answeredcorrect"),l1q1answeredcorrect:player.GetVar("l1q1answeredcorrect")})
	}
	)
}

function getActor() {
  return {
    "mbox": "mailto:ahmed.helal@ext.abwaab.com",
    "objectType": "Agent",
    "name": "My Example"
  };
}
