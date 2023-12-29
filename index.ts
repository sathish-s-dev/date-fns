export default function date_fns(arg: Date) {
	console.log();
	let [date, time] = arg.toISOString().split(/t/i);
	date = date.split('-').reverse().join('/');
	time = time.split('.')[0];
	return {
		date,
		time,
	};
}

// let value = date_fns(new Date());

// console.log(value);
