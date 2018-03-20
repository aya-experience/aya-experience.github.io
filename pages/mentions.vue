<template>
	<div>
		<aya-back/>
		<h1>Mentions Légales (aya-experience.com)</h1>
		<address>
			Zenika SARL de conseil en systèmes et logiciels informatiques.<br>
			10 rue de Milan 75009 Paris<br>
			Capital de 130 000 euros<br>
			RCS : Paris B 489 682 005
		</address>
		<p>
			Zenika est un cabinet d’innovation technologique, managériale et organisationnelle, qui accompagne les
			entreprises dans leur transformation numérique. C’est avant tout une entreprise qui a la capacité de s&#39;adapter
			et de se positionner sur de nouveaux créneaux technologiques. Elle regroupe ainsi des profils variés sur les
			domaines d’expertise suivants : Java, Réalité Virtuelle, Intelligence Artificielle, BigData, Web, Mobilité, IoT,
			DevOps, Craftsmanship, Agilité, Sécurité et transformation des organisations.<br><br>
			Directeur de publication : Carl Azoury, CEO Zenika
		</p>
		<address class="location">
			Hébergement : <br>
			GitHub<br>
			88 Colin P Kelly Jr. Street, San Francisco, CA<br>
			USA
		</address>
		<p>
			L’utilisateur est informé que ses données personnelles reccueillies sur le site
			aya-experience.com font l’objet d’un traitement automatisé par Zenika. Le droit d’accès et de
			rectification portant sur les données le concernant peut être exercé par courrier à
			l’adresse suivante :
		</p>		
		<address class="location">
			Zenika<br>
			Service Marketing<br>
			10 rue de Milan<br>
			75009 Paris<br><br>
		</address>
		<p>
			Zenika pourra transmettre vos données personnelles si vous l’avez expressément
			accepté auprès de ses partenaires. Vous pourrez également exercer vos droits d’accès
			et de rectification en adressant un courrier à Zenika à l’adresse mentionnée ci-dessus.
			Propriété Intellectuelle
			La structure générale, les textes, images animées ou non, les savoir-faire, les
			programmes et logiciels ainsi que tout autre élément composant ce site sont la
			propriété exclusive de Zenika et sont protégés par le droit d’auteur. Il en est de même
			des bases de données figurant sur le site aya-experience.com qui sont protégées. Toute
			représentation totale ou partielle de ce site, par quelque procédé que ce soit, sans
			l’autorisation expresse de Zenika est donc interdite et constituerait une contrefaçon.
			Les marques, les noms commerciaux, les logos figurant sur ce site sont des marques
			déposées de Zenika sauf mention contraire. Toute reproduction totale ou partielle des
			marques ou logos, effectuée à partir des éléments du site et sans l’autorisation de
			Zenika est donc prohibée.
		</p>
		<h2>Conditions d’utilisation</h2>
		<p>
			Tout lien avec ce site doit faire l’objet d’une autorisation préalable écrite de Zenika et
			ne pourra être réalisé que vers l’adresse de la page d’accueil du site www.aya-experience.com
			avec l’intégration d’un logo.
			Malgré les soins apportés par Zenika, les informations contenues dans ce site sont
			données à titre indicatif et sont sujettes à changement sans préavis. En conséquence,
			l’utilisateur reconnait utiliser ces informations sous sa responsabilité exclusive.
			L’utilisateur est informé qu’il pourra recevoir des informations des services proposés
			par Zenika. Il accepte les présentes conditions d’utilisation. Tout litige portant sur
			l’interprétation ou l’exécution des présentes mentions sera de la compétence exclusive
			des tribunaux français faisant l’application de la loi française. L’ensemble des éléments
			de ce site est protégé par copyright Zenika.
		</p>
	</div>
</template>

<style scoped>
div {
	margin: 2vh 20vw 0 20vw;
}
p {
	font-size: 1.2rem;
	font-weight: 300;
}

h1 {
	font-size: 3rem;
}

h2 {
	font-size: 2rem;
}

a {
	text-decoration: none;
	color: white;
}

address {
	font-size: 1.2rem;
}

.location {
	font-weight: 400;
}
</style>

<script>
import BackButton from '~/components/BackButton.vue'

export default {
	components: {
		'aya-back': BackButton
	}
}
</script>


