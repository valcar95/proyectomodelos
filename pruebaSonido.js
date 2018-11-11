var limiteInferiorFrecuencia=20;
var limiteSuperiorFrecuencia=20000;
var ugens=["whiteNoise","pinkNoise","lfNoise","blit","saw","lfSaw","lfPulse","impulse","square","tri","phasor","sin"];


var sonido=[701,1,15910,10,10103,4];
var sonidos=[];

sonidos.push(
    	{
            synthDef: {
                ugen: "flock.ugen."+ugens[sonido[1]],
                freq: sonido[0]
            }
		}
    );
sonidos.push(
    	{
            synthDef: {
                ugen: "flock.ugen."+ugens[sonido[3]],
                freq: sonido[2]
            }
		}
    );
sonidos.push(
    	{
            synthDef: {
                ugen: "flock.ugen."+ugens[sonido[5]],
                freq: sonido[4]
            }
		}
    );

for(var i=0; i<sonidos.length; i++){
    flock.synth(sonidos[i]);
}