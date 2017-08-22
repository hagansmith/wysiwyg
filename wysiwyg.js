var famousPeople = [
{
  title: 'Canadian singer-songwriter',
  name: 'Justin Bieber',
  bio: "Justin Drew Bieber is a Canadian singer and songwriter. After a talent manager discovered him through his YouTube videos covering songs in 2008 and signed to RBMG, Bieber released his debut EP, My World, in late 2009.",
  image: "http://i3.mirror.co.uk/incoming/article3992856.ece/ALTERNATES/s615b/Justin-Bieber.png",
  lifespan: {
    birth: 1994,
    death: '',
  }
},
{
  title: '45th U.S. President',
  name: 'Donald Trump',
  bio: "Donald John Trump is the 45th and current President of the United States, in office since January 20, 2017. Before entering politics, he was a businessman and television personality. ",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Donald_Trump_Pentagon_2017.jpg",
  lifespan: {
    birth: 1946,
    death: '', 
  }
},
{
  title: '44th U.S. President',
  name: 'Barack Obama',
  bio: "Barack Hussein Obama II is an American politician who served as the 44th President of the United States from 2009 to 2017. He is the first African American to have served as president.",
  image: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
  lifespan: {
    birth: 1961,
    death: '',
  }
},
{
  title: 'American singer-songwriter',
  name: 'Beyoncé',
  bio: "Beyoncé Giselle Knowles-Carter is an American singer, songwriter, dancer and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child.",
  image: "https://img.discogs.com/4u8GhOmNfDaj8s-LKES5o6eAck0=/600x533/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-52835-1477574459-3383.jpeg.jpg",
  lifespan: {
    birth: 1981,
    death: '',
  }
},
{
  title: 'American singer-songwriter',
  name: 'Taylor Swift',
  bio: "Taylor Alison Swift is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received widespread media coverage.",
  image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/29/11/Taylor-Swift-revenge-nerds.jpg",
  lifespan: {
    birth: 1989,
    death: '',
  }
},
{
  title: 'American-Trinidadian rapper',
  name: 'Nicki Minaj',
  bio: "Onika Tanya Maraj, known professionally as Nicki Minaj, is a Trinidadian-born American rapper, singer, songwriter and model.",
  image: "https://yt3.ggpht.com/-y1DFVpxdoJc/AAAAAAAAAAI/AAAAAAAAAAA/bYovaGjPenI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
  lifespan: {
    birth: 1982,
    death: '',
  }
},
{
  title: 'American television personality',
  name: 'Kim Kardashian',
  bio: "Kimberly Kardashian West is an American reality television personality, socialite, actress, businesswoman and model.",
  image: "https://pbs.twimg.com/profile_images/875432723837362176/j5NOs7Dj_400x400.jpg",
  lifespan: {
    birth: 1980,
    death: '',
  }
},
{
  title: '16th U.S. President',
  name: 'Abraham Lincoln',
  bio: "Abraham Lincoln was an American politician and lawyer who served as the 16th President of the United States from March 1861 until his assassination in April 1865.",
  image: "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/16_abraham_lincoln%5B1%5D.jpg",
  lifespan: {
    birth: 1809,
    death: 1865,
  }
}
]


var counter = 0;
var output = document.getElementById("famous");
var input = document.getElementById("bio-input")

for (var counter = 0; counter < famousPeople.length; counter++) {
  // Give each person element a unique identifier
  var string = "";
  string += `<div class="person_container" id="person-${counter}">`;
  string +=		`<header class="famous-header">${famousPeople[counter].name}, ${famousPeople[counter].title}</header>`;
	string += 	`<section>${famousPeople[counter].bio}, <img src="${famousPeople[counter].image}"</section>`;
	string += 	`<footer>${famousPeople[counter].lifespan.birth}, ${famousPeople[counter].lifespan.death}</footer>`;
  string += `</div>`;
  output.innerHTML += string;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person_container");
// console.log(containerEl);

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  var personId = (`person-${i}`);
  document.getElementById(personId).addEventListener("click", border);     
  };

function border(e) {
	console.log(e);
	e.target.parentElement.classList.toggle('border');

	var text = document.getElementById('bio-input');
	text.focus();
	text.addEventListener('keydown', function(e){
		if (e.keyCode === 13) {text.value = '';}	
	})
	
	text.addEventListener("keyup", function(){
	e.target.childNodes['0'].data = `${text.value}`;
	});
}






