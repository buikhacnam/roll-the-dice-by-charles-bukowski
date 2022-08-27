import gradient from 'gradient-string'
import figlet from 'figlet'
import player from 'play-sound'

const sleep = ms => new Promise(r => setTimeout(r, ms))

async function start() {
	await player().play('./roll-the-dice.mp3', err => {
		if (err) console.log(`Could not play sound: ${err}`)
	})

	figlet(`ROLL THE DICE`, (err, data) => {
		console.log(gradient.pastel.multiline(data) + '\n')
	})

	figlet(`by Charles Bukowski`, (err, data) => {
		console.log(gradient.pastel.multiline(data) + '\n')
	})

	await sleep(2000)
	console.log(
		gradient('cyan', 'pink')(`if you're going to try go all the way`)
	)

	await sleep(4000 - 2000)
	console.log(gradient('cyan', 'pink')("otherwise don't even start"))

	await sleep(7000 - 4000)
	console.log(
		gradient('cyan', 'pink')("if you're going to try go all the way")
	)

	await sleep(11000 - 7000)
	console.log(gradient('cyan', 'pink')('this could mean losing girlfriends'))

	await sleep(13000 - 11000)
	console.log(
		gradient('cyan', 'pink')('wise relatives jobs and maybe your mind')
	)

	await sleep(16000 - 13000)
	console.log(gradient('cyan', 'pink')('go all the way'))

	await sleep(20000 - 16000)
	console.log(
		gradient(
			'cyan',
			'pink'
		)('it could mean not eating for three or four days')
	)

	await sleep(22000 - 20000)
	console.log(
		gradient('cyan', 'pink')('it could mean freezing and a park bench')
	)

	await sleep(24000 - 22000)
	console.log(
		gradient(
			'cyan',
			'pink'
		)('it could mean jail it could mean derision mockery isolation')
	)

	await sleep(26000 - 24000)
	console.log(gradient('cyan', 'pink')('isolation is the gift'))

	await sleep(30000 - 26000)
	console.log(
		gradient('cyan', 'pink')('all the others are a test of your endurance')
	)

	await sleep(32000 - 30000)
	console.log(
		gradient('cyan', 'pink')('of how much you really want to do it')
	)

	await sleep(35000 - 32000)
	console.log(gradient('cyan', 'pink')("and you'll do it despite rejection"))

	await sleep(38000 - 35000)
	console.log(gradient('cyan', 'pink')('and the worst odds'))

	await sleep(40000 - 38000)
	console.log(
		gradient(
			'cyan',
			'pink'
		)("and it'll be better than anything you can imagine")
	)

	await sleep(43000 - 40000)
	console.log(
		gradient('cyan', 'pink')("if you're going to try go all the way")
	)

	await sleep(46000 - 43000)
	console.log(gradient('cyan', 'pink')("there's no other feeling like that"))

	await sleep(49000 - 46000)
	console.log(
		gradient(
			'cyan',
			'pink'
		)("you'll be alone with the gods and the nights will flame with fire")
	)

	await sleep(50000 - 49000)
	console.log(gradient('cyan', 'pink')('do it do it all the way all the way'))

	await sleep(56000 - 50000)
	console.log(
		gradient(
			'cyan',
			'pink'
		)('you will ride life straight to perfect laughter')
	)

	await sleep(59000 - 56000)
	console.log(gradient('cyan', 'pink')("it's the only good fight there is"))

	await sleep(64000 - 59000)
	figlet(`read by`, (err, data) => {
		console.log(gradient.pastel.multiline(data) + '\n')
	})

	figlet(`LEX FRIDMAN`, (err, data) => {
		console.log(gradient.pastel.multiline(data) + '\n')
	})

	console.log(
		'source: https://www.youtube.com/watch?v=rnfAVasBkQc&ab_channel=LexFridman'
	)

	process.exit(0)
}

console.clear()
await start()
