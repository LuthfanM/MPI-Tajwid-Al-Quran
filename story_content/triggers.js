function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nBM4voW3SZ":
        Script1();
        break;
      case "6Cjm35DAAZz":
        Script2();
        break;
      case "68GCjE8D7tC":
        Script3();
        break;
      case "6nBicuv7irW":
        Script4();
        break;
      case "6RXp6tVl5RJ":
        Script5();
        break;
      case "6UtZu30iaEd":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5cNeE4BqBAR');
const duration = 750;
const easing = 'ease-out';
const id = '6diZbOHP2M3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5gzv44y39lu');
const duration = 750;
const easing = 'ease-out';
const id = '6diZbOHP2M3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6HVpVI2WGm7');
const duration = 750;
const easing = 'ease-out';
const id = '6diZbOHP2M3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6Bx3jJZO99S');
const duration = 750;
const easing = 'ease-out';
const id = '6diZbOHP2M3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6bIxHnrprn2');
const duration = 750;
const easing = 'ease-out';
const id = '6diZbOHP2M3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6LFj8Qm2igd');
const duration = 750;
const easing = 'ease-out';
const id = '6diZbOHP2M3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
