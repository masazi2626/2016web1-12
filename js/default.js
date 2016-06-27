document.getElementById('form').onsubmit = function()
{
  window.alert(document.getElementById('form').word.value);
  return false;
};

for(var i = 1; i < 100; i++)
{
  var li = document.createElement('li');
  li.textContent = i;
  document.getElementById('list').appendChild(li);
}
