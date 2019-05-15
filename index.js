const {obtenerPromedio,argv} = require('./datos');

console.log(argv);
console.log('Promedio de prueba='+obtenerPromedio(2,3,4));
console.log(argv.n);

if(argv._[0]=='promedio'){
	console.log('El promedio de '+argv.n+ ' es: '+ obtenerPromedio(argv.m,
																   argv.p,
																   argv.i));
}
else{
	console.log('Promedio no calculado');
}