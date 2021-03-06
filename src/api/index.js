const FAKE_DELAY = 2000;
const FAKE_DATA = [
	{	
		id:0,
		title:'驴Qu茅 es CodelyTV? 馃崉馃敐 - Formaci贸n para programadores y divulgaci贸n del mundo del desarrollo',
		url:'https://www.youtube.com/watch?v=rpMQd2DazTc',
		embed:'https://www.youtube.com/embed/rpMQd2DazTc',
		thumbnail:'https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg',
	},
	{ 	
		id:1,
		title:'Introducci贸n a PHP: C贸mo configurar tu entorno de desarrollo 馃悩',
		url: 'https://www.youtube.com/embed/watch?v=v2IjMrpZog4',
		embed: 'https://www.youtube.com/embed/v2IjMrpZog4',
		thumbnail: 'https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg',
	},
	{ 
		id:2,
		title:'Comunicaci贸n entre microservicios: 馃晪 Event-Driven Architecture',
		url: 'https://www.youtube.com/watch?v=V4mjxJ5czog',
		embed: 'https://www.youtube.com/embed/V4mjxJ5czog',
		thumbnail: 'https://img.youtube.com/vi/V4mjxJ5czog/maxresdefault.jpg',
	},
	{ 	
		id:3,
		title:'馃 Cu谩ndo usar #interfaces鈥? y cu谩ndo EVITARLAS',
		url: 'https://www.youtube.com/watch?v=uP1CoHtjALg',
		embed: 'https://www.youtube.com/embed/uP1CoHtjALg',
		thumbnail: 'https://img.youtube.com/vi/uP1CoHtjALg/maxresdefault.jpg',
	},
	{ 
		id:4,
		title:'Qu茅 es la "Composici贸n sobre herencia" 馃懆鈥嶐煈┾?嶐煈р?嶐煈︷煔? (#CompositionOverInheritance)',
		url: 'https://www.youtube.com/watch?v=OyTPDFyGWRc',
		embed: 'https://www.youtube.com/embed/OyTPDFyGWRc',
		thumbnail: 'https://img.youtube.com/vi/OyTPDFyGWRc/maxresdefault.jpg',
	},
	{ 
		id:5,
		title:'ReactJS vs VueJS vs Angular 6 鈿★笍| 1/5 Qu茅 aporta un framework y qu茅 es un componente',
		url: 'https://www.youtube.com/watch?v=lttZCIin4HM',
		embed: 'https://www.youtube.com/embed/lttZCIin4HM',
		thumbnail: 'https://img.youtube.com/vi/lttZCIin4HM/maxresdefault.jpg',
	}
];

const MOVIES_DATA = {
	results: [
		{	
			id:0,
			title:'Movie 1',
			poster_path:'pMQd2DazTc',
		},
		{	
			id:2,
			title:'Movie 2',
			poster_path:'pMQd2DazTc',
		}
	]
};

export const addVideo = (newVideo) => new Promise((resolve, reject) => {	
	setTimeout(() => { 
		newVideo.id = MOVIES_DATA.results.length + 1;
		MOVIES_DATA.results.push(newVideo);
		return resolve({ok:1});
	},MOVIES_DATA);
});
 
export const getVideos = () => new Promise((resolve, reject) => {	
	setTimeout(() => { 
		return resolve(FAKE_DATA);
	},FAKE_DELAY);
});

// export const getMovies = () => new Promise((resolve, reject) =>  {
// 	setTimeout(() => { 
// 		return resolve(MOVIES_DATA);
// 	},MOVIES_DATA);
// });

export const getMovies = async () => {
	try{
        // const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=b89213a613540e087a3818b15bcecaa5&language=en-US&query=sonic&page=1&include_adult=false');
		// return await response.json();
		console.log("getMovies");
		return MOVIES_DATA;
    }catch(error) {
        return [];
    }
}
export const getMovies2 = () => {
	return MOVIES_DATA;
}
// Return a description from server
const getDescription = async () => {
	try{
		const resp = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1');
		return resp.json();
	}catch(error){
		throw error;
	}
}

const getThumbnail = async () => {
	try {
		const resp = await fetch('https://rickandmortyapi.com/api/character/2');
		return resp.json();
	} catch(error) {
		throw error;
	}
}

export const getVideoDetail = ({idVideo}) => new Promise((resolve, reject) => {	
	setTimeout(() => { 
		const video = FAKE_DATA.find((el) => parseInt(el.id) === parseInt(idVideo));
		// Something goes wrong
		if(!video) return reject({message:"Video was not found ;("});
		// All is ok
		if(video.description) return resolve(video);
		//In case video don't have text description
		return getDescription().then(description => {
			video.description = description.join();
			return resolve(video);
		}).catch(console.error);
	},FAKE_DELAY);
});