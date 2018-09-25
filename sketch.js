let video;
let rSlider;
let gSlider;
let bSlider;
let checkbox;

function setup(){
  createCanvas(320,180);
  video = createCapture(VIDEO);
  video.size(320,180);
  video.hide();
  createElement('p','Red');
  rSlider = createSlider(-255,255,0);
  createElement('p','Green');
  gSlider = createSlider(-255,255,0);
  createElement('p','Blue');
  bSlider = createSlider(-255,255,0);
  checkbox = createCheckbox('black & white', false);
  pixelDensity(1);

}

function draw(){
  loadPixels();
  video.loadPixels();
  for(let x = 0; x < video.width; x++){
    for(let y = 0; y < video.height; y++){
      let i = (x + y * video.width) * 4;

      let bright = (video.pixels[i] + video.pixels[i+1] + video.pixels[i+2])/3;

      let r = video.pixels[i];
      let g = video.pixels[i+1];
      let b = video.pixels[i+2];
      let a = 255;

      pixels[i] = r + rSlider.value();
      pixels[i+1] = g + gSlider.value();
      pixels[i+2] = b + bSlider.value();
      pixels[i+3] = 255;

      if(checkbox.checked()){
        pixels[i] = bright;
        pixels[i+1] = bright;
        pixels[i+2] = bright;
        pixels[i+3] = 255;
      }
    }
  }
  updatePixels();
}
