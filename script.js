const powerBtn = document.getElementById('power');
let isOn = true;

powerBtn.addEventListener('click', () => {
  isOn = !isOn;
  powerBtn.className = isOn ? 'toggle on' : 'toggle off';
  powerBtn.textContent = isOn ? 'ON' : 'OFF';
  console.log('Machine status:', isOn ? 'ON' : 'OFF', '- Synced to cloud');
});

setInterval(() => {
  const tio2 = (92 + Math.random() * 6).toFixed(1);
  const elem = document.getElementById('tio2');
  if(elem) elem.textContent = tio2 + '%';
}, 5000);

function saveSchedule() {
  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;
  alert('Schedule saved: ' + start + ' - ' + end);
}

function requestService() {
  alert('Maintenance request submitted. Service team will contact you shortly.');
}