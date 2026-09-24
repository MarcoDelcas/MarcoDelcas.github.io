// Edita este archivo con tu información personal.
// Los íconos usan Iconify: busca más en https://icon-sets.iconify.design/

import fotoPerfil from '../assets/foto_perfil.jpeg';

export const profile = {
	name: 'Marco',
	brand: { first: 'Marco', accent: 'DelCas' },
	fullName: 'Marco A. Delgadillo Castellanos',
	role: 'Ingeniero AppSec con enfoque en DevOps',
	location: 'México',
	slogan: '≥ Ingeniero AppSec · DevOps',
	avatar: fotoPerfil,
	cv: '#',
	bio: [
		'Ingeniero de seguridad de aplicaciones con orientación a prácticas DevOps. Trabajo con pipelines en Azure DevOps para automatizar análisis de seguridad, así como con contenedores Docker y la administración de entornos Linux.',
		'Me especializo en integrar la validación automatizada de seguridad dentro del flujo de desarrollo, con interés en consolidar mi perfil en roles de operación continua e infraestructura cloud.',
	],
	// Áreas de enfoque que se muestran debajo de la bio
	focus: [
		'Automatización de análisis de seguridad en pipelines de CI/CD.',
		'Auditoría de código estático y vulnerabilidades OWASP Top 10 Web y API.',
		'Hardening de plataformas SCM y seguridad en contenedores.',
		'Administración de servidores Linux.',
	],
};

export const socials = [
	{
		name: 'GitHub',
		icon: 'fa:github-alt',
		url: 'https://github.com/MarcoDelcas',
		description: 'Repositorios, laboratorios y proyectos personales.',
	},
	{
		name: 'LinkedIn',
		icon: 'simple-icons:linkedin',
		url: 'https://www.linkedin.com/in/marcodelcas',
		description: 'Trayectoria profesional, experiencia y certificaciones.',
	},
];

// Experiencia profesional (línea de tiempo de "Sobre mí"): puesto, empresa y periodo. `period` es opcional.
export const experience = [
	{
		title: 'Consultor Jr. Purple Team',
		place: 'MCSEC',
		period: 'Febrero 2026 – Septiembre 2026',
	},
	{
		title: 'Prácticas Profesionales',
		place: 'MCSEC',
		period: 'Julio 2025 – Enero 2026',
	},
	{
		title: 'Servicio Social',
		place: 'Benemérita Universidad Autónoma de Puebla (BUAP)',
		period: 'Enero 2025 – Junio 2025',
	},
];

// Formación académica e idiomas
export const education = [
	{
		title: 'Ingeniería en Ciencias de la Computación',
		place: 'Benemérita Universidad Autónoma de Puebla (BUAP)',
		period: 'Egresado',
	},
	{
		title: 'Idiomas',
		place: 'Español (lengua materna) · Inglés (A2 MCER)',
	},
];

// Tecnologías del carrusel y de los íconos de fondo del hero
export const skills = [
	{ name: 'Azure DevOps', icon: 'devicon:azuredevops' },
	{ name: 'Docker', icon: 'skill-icons:docker' },
	{ name: 'Kubernetes', icon: 'skill-icons:kubernetes' },
	{ name: 'Linux', icon: 'skill-icons:linux-dark' },
	{ name: 'Git', icon: 'skill-icons:git' },
	{ name: 'GitHub', icon: 'skill-icons:github-dark' },
	{ name: 'GitLab', icon: 'skill-icons:gitlab-dark' },
	{ name: 'Java', icon: 'skill-icons:java-dark' },
	{ name: 'Spring Boot', icon: 'skill-icons:spring-dark' },
	{ name: 'C#', icon: 'skill-icons:cs' },
	{ name: 'Python', icon: 'skill-icons:python-dark' },
	{ name: 'Bash', icon: 'skill-icons:bash-dark' },
	{ name: 'MySQL', icon: 'skill-icons:mysql-dark' },
	{ name: 'PostgreSQL', icon: 'skill-icons:postgresql-dark' },
];

// Contenido de la terminal de Skills (se muestra como skills.json)
export const stack = {
	name: 'Marco A. Delgadillo Castellanos',
	role: 'Ingeniero AppSec | DevOps',
	education: {
		degree: 'Ing. en Ciencias de la Computación',
		university: 'BUAP',
		status: 'Egresado',
	},
	languages: ['Español (nativo)', 'Inglés (A2 MCER)'],
	skills: {
		ciCd: ['Azure DevOps Pipelines', 'Validaciones automatizadas en build'],
		containers: ['Docker', 'Docker Compose', 'Kubernetes (en formación)'],
		versionControl: ['Git', 'GitFlow'],
		languages: ['Java (Spring Boot)', 'C#', 'Bash', 'Python'],
		systems: ['Administración de servidores Linux'],
		databases: ['MySQL', 'PostgreSQL'],
		security: [
			'Checkmarx One',
			'OWASP Top 10 Web y API',
			'Hardening de plataformas SCM',
			'Seguridad en contenedores',
			'Auditoría de código estático',
		],
	},
	interests: ['Operación continua', 'Infraestructura cloud'],
};

// Proyectos destacados. `demo` y `repo` son opcionales: si no existen, no se muestra el enlace.
export const projects: {
	title: string;
	description: string;
	image: string;
	tech: string[];
	demo?: string;
	repo?: string;
}[] = [
	{
		title: 'Seguridad en CI/CD',
		description:
			'Pipelines en Azure DevOps que ejecutan el CLI de Checkmarx One como etapa de validación dentro del flujo de build, con documentación para su adopción por los equipos de desarrollo.',
		image: '',
		tech: ['devicon:azuredevops', 'skill-icons:java-dark', 'skill-icons:cs'],
	},
	{
		title: 'Laboratorio OWASP Top 10',
		description:
			'Entorno contenerizado con Docker y Docker Compose sobre stack Java para reproducir y documentar vulnerabilidades OWASP Top 10 Web y API.',
		image: '',
		tech: ['skill-icons:docker', 'skill-icons:java-dark', 'skill-icons:spring-dark'],
	},
	{
		title: 'Hardening de plataformas SCM',
		description:
			'Evaluación de configuraciones, controles de acceso y políticas de ramas en GitHub, GitLab, Azure DevOps y Sonatype Nexus Repository.',
		image: '',
		tech: ['skill-icons:github-dark', 'skill-icons:gitlab-dark', 'devicon:azuredevops'],
	},
	{
		title: 'Auditoría de código estático',
		description:
			'Auditorías de código estático sobre proyectos Java y C#, con documentación de hallazgos y propuestas de remediación.',
		image: '',
		tech: ['skill-icons:java-dark', 'skill-icons:cs', 'devicon:azuredevops'],
	},
	{
		title: 'Infraestructura Linux BUAP',
		description:
			'Administración de un servidor Linux para el programa de ciberseguridad de la BUAP, con despliegue y mantenimiento de servicios, y desarrollo del sitio web institucional.',
		image: '',
		tech: ['skill-icons:linux-dark', 'skill-icons:bash-dark', 'skill-icons:docker'],
	},
];
