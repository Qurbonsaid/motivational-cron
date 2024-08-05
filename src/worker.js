export default {
	async fetch(request, env, ctx) {
		return new Response('!');
	},

	async scheduled(event, env, ctx) {
		try {
			const res = await fetch(`https://api.telegram.org/bot${env.TOKEN}/sendMessage?chat_id=${env.CHAT}&text=${env.TEXT}`);
			if (!res.ok) console.log(await res.json());
		} catch (err) {
			console.error(err);
		}
	},
};
