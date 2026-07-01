export type SegmentoContent = {
	slug: string;
	nome: string;
	titulo: string;
	descricao: string;
	intro: string;
	dores: string[];
	comoAjudamos: string[];
	faq: { q: string; a: string }[];
};

export const SEGMENTOS_CONTENT: SegmentoContent[] = [
	{
		slug: 'odontologia',
		nome: 'Odontologia',
		titulo: 'Marketing para Odontologia em Londrina',
		descricao: 'Atraia pacientes qualificados para sua clínica odontológica em Londrina e reduza faltas com marketing ético e orientado a agendamentos.',
		intro:
			'Consultório cheio de curiosos que não fecham tratamento e agenda furada por faltas drenam o faturamento de qualquer clínica odontológica. A Matra estrutura sua captação para atrair quem realmente quer tratar, respeitando as normas do CFO.',
		dores: [
			'Alto índice de faltas (no-show) e desmarcações que deixam a cadeira ociosa',
			'Dificuldade em preencher a agenda de tratamentos de maior valor, como implantes e ortodontia',
			'Concorrência agressiva de clínicas populares que competem só por preço',
			'Pacientes que pedem orçamento, somem e nunca voltam para fechar',
		],
		comoAjudamos: [
			'Campanhas no Google e Meta Ads segmentadas por procedimento e capacidade de pagamento, não por cliques baratos',
			'Fluxos de lembrete e retorno no WhatsApp para reduzir faltas e reativar orçamentos parados',
			'Perfil no Google otimizado com avaliações reais para dominar as buscas por dentista na sua região',
			'Conteúdo de autoridade que educa o paciente e valoriza o tratamento antes da consulta',
		],
		faq: [
			{
				q: 'O marketing para odontologia respeita as regras do CFO?',
				a: 'Sim. Toda comunicação segue o Código de Ética Odontológica: nada de sensacionalismo, promessa de resultado ou uso indevido de imagens. Trabalhamos autoridade, informação e captação ética para atrair pacientes com confiança.',
			},
			{
				q: 'Como o marketing ajuda a reduzir as faltas na clínica?',
				a: 'Além de atrair pacientes mais comprometidos, implementamos fluxos automáticos de confirmação e lembrete no WhatsApp. Isso diminui as faltas de última hora e mantém a agenda do dentista produtiva.',
			},
			{
				q: 'Consigo atrair pacientes para tratamentos de alto valor?',
				a: 'Sim. Criamos campanhas específicas para implantes, ortodontia e estética dental, segmentando o público certo e educando sobre o tratamento. Isso eleva o ticket médio em vez de lotar a agenda de procedimentos baratos.',
			},
		],
	},
	{
		slug: 'psicologos',
		nome: 'Psicólogos',
		titulo: 'Marketing para Psicólogos em Londrina',
		descricao: 'Preencha sua agenda de atendimentos com marketing ético para psicólogos em Londrina, dentro das normas do CFP e com foco em autoridade.',
		intro:
			'Construir uma clientela estável como psicólogo exige presença digital que transmita confiança e respeite o sigilo da profissão. A Matra ajuda você a preencher a agenda com pacientes alinhados à sua abordagem, seguindo as diretrizes do CFP.',
		dores: [
			'Agenda com horários ociosos e renda instável entre um paciente e outro',
			'Insegurança sobre o que pode ou não divulgar sem ferir o Código de Ética do CFP',
			'Dificuldade de se diferenciar em meio a tantos profissionais e plataformas de terapia online',
			'Pacientes que procuram por afinidade e abordagem, não por anúncio genérico',
		],
		comoAjudamos: [
			'Presença digital que comunica sua abordagem e especialidade para atrair o paciente certo',
			'Conteúdo educativo que gera autoridade e aproxima quem busca terapia, sem prometer cura ou resultado',
			'Campanhas discretas no Google e Instagram, respeitando o sigilo e o tom acolhedor da profissão',
			'Estrutura de agendamento simples que facilita o primeiro contato de quem já está decidido',
		],
		faq: [
			{
				q: 'É permitido anunciar como psicólogo pelo Código de Ética do CFP?',
				a: 'Sim, desde que a divulgação seja sóbria e informativa. Não usamos promessas de resultado, depoimentos de pacientes ou sensacionalismo. O foco é comunicar sua especialidade e abordagem com responsabilidade.',
			},
			{
				q: 'Como atrair pacientes alinhados à minha abordagem terapêutica?',
				a: 'Trabalhamos conteúdo e segmentação que evidenciam sua especialidade, seja TCC, psicanálise ou terapia de casal. Assim, quem chega até você já tem afinidade com sua forma de trabalhar, o que melhora a adesão ao tratamento.',
			},
			{
				q: 'Funciona também para atendimento online?',
				a: 'Sim. Estruturamos campanhas para atendimento presencial em Londrina e também para terapia online, ampliando seu alcance para pacientes de outras cidades que buscam sua especialidade.',
			},
		],
	},
	{
		slug: 'clinicas-de-estetica',
		nome: 'Clínicas de Estética',
		titulo: 'Marketing para Clínicas de Estética em Londrina',
		descricao: 'Lote sua agenda de procedimentos estéticos em Londrina com marketing focado em ticket alto, fidelização e retorno sobre o investimento.',
		intro:
			'No mercado de estética, quem não aparece de forma constante perde cliente para a concorrência da esquina. A Matra transforma seu Instagram e seus anúncios em uma máquina de agendamentos para procedimentos de maior valor.',
		dores: [
			'Concorrência altíssima e clientes que trocam de clínica por qualquer promoção',
			'Sazonalidade forte, com meses cheios e outros de agenda vazia',
			'Dificuldade de vender procedimentos de ticket alto, como harmonização facial',
			'Clientes que fazem um procedimento e nunca mais voltam, sem recorrência',
		],
		comoAjudamos: [
			'Campanhas de captação para procedimentos de maior valor, atraindo clientes com potencial de recompra',
			'Gestão de Instagram com antes e depois e conteúdo que gera desejo e prova social',
			'Fluxos de fidelização e reativação no WhatsApp para trazer o cliente de volta em novos ciclos',
			'Ofertas estratégicas para preencher a agenda nos meses de baixa temporada',
		],
		faq: [
			{
				q: 'Como atrair clientes para procedimentos de ticket alto?',
				a: 'Segmentamos campanhas para um público com poder de compra e criamos conteúdo que educa sobre o valor de procedimentos como harmonização e bioestimuladores. O objetivo é vender resultado e experiência, não apenas preço baixo.',
			},
			{
				q: 'O marketing ajuda a fidelizar os clientes da clínica?',
				a: 'Sim. Montamos fluxos de acompanhamento e reativação que lembram o cliente do momento certo de repetir o procedimento. Isso cria recorrência e aumenta o valor de cada cliente ao longo do tempo.',
			},
			{
				q: 'Como lidar com a sazonalidade da estética?',
				a: 'Antecipamos os períodos de baixa com campanhas e promoções planejadas, além de trabalhar procedimentos que têm demanda o ano todo. Assim a agenda se mantém mais equilibrada mesmo nos meses tradicionalmente fracos.',
			},
		],
	},
	{
		slug: 'restaurantes',
		nome: 'Restaurantes',
		titulo: 'Marketing para Restaurantes em Londrina',
		descricao: 'Encha as mesas nos dias fracos e aumente os pedidos de delivery do seu restaurante em Londrina com marketing local orientado a movimento.',
		intro:
			'Restaurante bom não pode ficar dependendo só do iFood ou do movimento do fim de semana. A Matra atrai clientes para o salão e para o delivery próprio, principalmente naqueles dias de semana em que a casa fica vazia.',
		dores: [
			'Movimento fraco de segunda a quinta, com salão ocioso e equipe parada',
			'Dependência do iFood, que come a margem e não devolve o contato do cliente',
			'Dificuldade de fazer o cliente voltar e criar frequência de visita',
			'Concorrência de novos restaurantes que abrem toda semana na cidade',
		],
		comoAjudamos: [
			'Campanhas geolocalizadas para atrair quem está com fome perto do seu restaurante',
			'Estratégias para movimentar os dias fracos, como combos e promoções de meio de semana',
			'Delivery próprio e base de clientes no WhatsApp para reduzir a dependência do iFood',
			'Gestão de redes sociais com fotos que dão água na boca e geram desejo imediato',
		],
		faq: [
			{
				q: 'Como aumentar o movimento nos dias fracos da semana?',
				a: 'Criamos campanhas e ofertas específicas para segunda a quinta, comunicadas para clientes que já conhecem a casa e para o público próximo. Combos, promoções de horário e ações no WhatsApp ajudam a encher o salão nesses dias.',
			},
			{
				q: 'Dá para diminuir a dependência do iFood?',
				a: 'Sim. Estruturamos um canal de delivery próprio e uma base de contatos no WhatsApp, para você vender direto ao cliente sem pagar a comissão da plataforma e ainda ter os dados de quem compra para reativar depois.',
			},
			{
				q: 'Fotos e redes sociais realmente trazem cliente?',
				a: 'Sim. Comida entra pelos olhos: fotos e vídeos profissionais dos pratos aumentam muito o apetite e o compartilhamento. Aliado a anúncios geolocalizados, isso transforma seguidores e vizinhos em clientes no caixa.',
			},
		],
	},
	{
		slug: 'advocacia',
		nome: 'Advocacia',
		titulo: 'Marketing Jurídico para Advogados em Londrina',
		descricao: 'Gere autoridade e capte clientes para seu escritório de advocacia em Londrina com marketing dentro das regras da OAB e do Provimento 205.',
		intro:
			'Advocacia se constrói com autoridade e confiança, não com anúncio sensacionalista. A Matra fortalece a presença digital do seu escritório para atrair clientes qualificados dentro do que o Provimento 205 da OAB permite.',
		dores: [
			'Receio de infringir as regras da OAB e o Código de Ética ao divulgar o escritório',
			'Dependência exclusiva de indicações, sem previsibilidade de novos casos',
			'Dificuldade de se posicionar como autoridade na sua área de atuação',
			'Concorrência de escritórios maiores e de plataformas jurídicas online',
		],
		comoAjudamos: [
			'Marketing de conteúdo jurídico que gera autoridade e educa o cliente sem mercantilizar a profissão',
			'Presença digital sóbria e informativa, alinhada ao Provimento 205 e ao Código de Ética da OAB',
			'Captação ética de clientes qualificados por área de atuação, do trabalhista ao empresarial',
			'Otimização do Google e do site para quem busca advogado especialista na sua cidade',
		],
		faq: [
			{
				q: 'Advogado pode fazer marketing sem infringir a OAB?',
				a: 'Pode, desde que respeite o Provimento 205/2021. Não usamos captação de clientela, mercantilização ou promessa de resultado. O foco é marketing de conteúdo, informação e autoridade, tudo dentro do Código de Ética da profissão.',
			},
			{
				q: 'Como o conteúdo ajuda a captar clientes?',
				a: 'Artigos e publicações que esclarecem dúvidas jurídicas posicionam você como referência na sua área. Quem tem o problema encontra sua explicação, confia na sua competência e procura o escritório de forma espontânea e ética.',
			},
			{
				q: 'Funciona para escritórios de qualquer área do direito?',
				a: 'Sim. Adaptamos a estratégia para a sua especialidade, seja direito trabalhista, previdenciário, família ou empresarial. Cada área tem um público e uma linguagem, e trabalhamos a captação certa para o seu tipo de causa.',
			},
		],
	},
	{
		slug: 'autoescolas',
		nome: 'Autoescolas',
		titulo: 'Marketing para Autoescolas em Londrina',
		descricao: 'Aumente as matrículas da sua autoescola em Londrina com marketing focado em primeira habilitação, adição de categoria e reciclagem.',
		intro:
			'A decisão de tirar a carteira quase sempre começa numa busca no Google ou num anúncio no Instagram. A Matra coloca sua autoescola na frente de quem está pronto para se matricular, com campanhas que geram contato direto no WhatsApp.',
		dores: [
			'Concorrência que briga por preço e derruba a margem das matrículas',
			'Sazonalidade e meses de poucas matrículas entre uma turma e outra',
			'Dificuldade de alcançar o jovem que vai tirar a primeira habilitação',
			'Leads que pedem valor pelo WhatsApp e depois somem sem fechar',
		],
		comoAjudamos: [
			'Campanhas no Google e Meta Ads para quem está pesquisando ativamente por autoescola na cidade',
			'Comunicação certeira para o público jovem da primeira habilitação e para adição de categoria',
			'Fluxos de atendimento no WhatsApp para converter o contato em matrícula rapidamente',
			'Ofertas e ações para preencher turmas nos períodos de baixa procura',
		],
		faq: [
			{
				q: 'Como atrair jovens para a primeira habilitação?',
				a: 'Usamos segmentação por idade e interesse nas redes sociais para falar diretamente com quem está completando 18 anos e quer a CNH. A linguagem e os criativos são pensados para esse público, o que aumenta muito a taxa de contato.',
			},
			{
				q: 'Consigo competir sem baixar o preço?',
				a: 'Sim. Em vez de brigar só por valor, destacamos os diferenciais da sua autoescola, como aprovação, atendimento e flexibilidade de horários. Isso atrai o aluno que valoriza qualidade e não decide apenas pelo mais barato.',
			},
			{
				q: 'O marketing ajuda a preencher as turmas nos meses fracos?',
				a: 'Ajuda. Planejamos campanhas e ofertas para os períodos de menor procura, além de trabalhar reciclagem e adição de categorias. Assim você mantém um fluxo mais constante de matrículas ao longo do ano.',
			},
		],
	},
	{
		slug: 'academias-e-studios',
		nome: 'Academias e Studios',
		titulo: 'Marketing para Academias e Studios em Londrina',
		descricao: 'Aumente as matrículas e reduza o cancelamento da sua academia ou studio em Londrina com marketing focado em captação e retenção de alunos.',
		intro:
			'Encher a academia em janeiro é fácil; o desafio é manter o aluno e captar de forma constante o ano todo. A Matra estrutura sua captação e retenção para que o studio não viva de picos, mas de crescimento previsível.',
		dores: [
			'Alta rotatividade de alunos, com muitos cancelamentos após os primeiros meses',
			'Dependência do pico de janeiro, com procura fraca no resto do ano',
			'Dificuldade de encher aulas experimentais e converter visitantes em matrículas',
			'Concorrência de academias low cost e de studios boutique na mesma região',
		],
		comoAjudamos: [
			'Campanhas de captação com foco em aula experimental e conversão em plano recorrente',
			'Estratégias de retenção com conteúdo e comunidade para reduzir o cancelamento',
			'Gestão de redes sociais mostrando resultados, ambiente e prova social dos alunos',
			'Ações planejadas para manter matrículas constantes fora do pico de início de ano',
		],
		faq: [
			{
				q: 'Como reduzir o cancelamento de alunos?',
				a: 'A retenção começa antes da matrícula, atraindo o aluno certo, e continua com engajamento nas redes, senso de comunidade e acompanhamento. Trabalhamos comunicação que mantém o aluno motivado e conectado com a academia.',
			},
			{
				q: 'Dá para captar alunos fora de janeiro?',
				a: 'Sim. Criamos campanhas contínuas e ofertas sazonais para meses de menor procura, além de trabalhar modalidades específicas como funcional, pilates e musculação. O objetivo é um fluxo estável, não depender só do pico anual.',
			},
			{
				q: 'A aula experimental realmente converte?',
				a: 'Quando bem trabalhada, sim. Estruturamos campanhas que levam o interessado para a experimental e criamos um roteiro de acompanhamento para transformar essa visita em matrícula, aproveitando o momento de maior interesse.',
			},
		],
	},
	{
		slug: 'fisioterapeutas',
		nome: 'Fisioterapeutas',
		titulo: 'Marketing para Fisioterapeutas em Londrina',
		descricao: 'Preencha sua agenda de pacientes particulares em Londrina com marketing para fisioterapeutas focado em autoridade e captação qualificada.',
		intro:
			'Depender só de convênio e indicação limita o crescimento de qualquer fisioterapeuta. A Matra ajuda você a atrair pacientes particulares e a valorizar especialidades como pilates, RPG e reabilitação pós-cirúrgica.',
		dores: [
			'Dependência de convênios que pagam pouco e apertam a margem',
			'Agenda irregular, sem previsibilidade de novos pacientes particulares',
			'Dificuldade de comunicar especialidades como pilates, RPG e pós-operatório',
			'Concorrência de clínicas maiores e de outros profissionais na região',
		],
		comoAjudamos: [
			'Campanhas para atrair pacientes particulares dispostos a pagar pelo seu atendimento especializado',
			'Conteúdo de autoridade que educa sobre dores, lesões e tratamentos, respeitando as normas do COFFITO',
			'Posicionamento das suas especialidades para quem busca reabilitação ou pilates na cidade',
			'Presença no Google otimizada para quem procura fisioterapeuta perto de si',
		],
		faq: [
			{
				q: 'Como atrair mais pacientes particulares e depender menos de convênio?',
				a: 'Criamos campanhas que comunicam o valor do seu atendimento especializado para um público disposto a pagar por qualidade. Ao destacar diferenciais e resultados, você reduz a dependência dos convênios de baixa remuneração.',
			},
			{
				q: 'O marketing respeita as normas do COFFITO?',
				a: 'Sim. Toda comunicação segue as regras do conselho: sem promessa de cura, sem sensacionalismo e com informação responsável. Trabalhamos autoridade e educação para atrair pacientes com confiança.',
			},
			{
				q: 'Consigo divulgar especialidades como pilates e RPG?',
				a: 'Consegue. Estruturamos campanhas específicas para cada especialidade, falando com quem busca aquele tratamento. Isso preenche a agenda com o tipo de atendimento que você mais quer realizar e que tem melhor retorno.',
			},
		],
	},
	{
		slug: 'nutricionistas',
		nome: 'Nutricionistas',
		titulo: 'Marketing para Nutricionistas em Londrina',
		descricao: 'Atraia pacientes para seu consultório de nutrição em Londrina com marketing ético, dentro das normas do CFN e focado em autoridade.',
		intro:
			'No universo da nutrição, autoridade vale mais que qualquer promessa milagrosa. A Matra ajuda você a construir presença digital sólida e a preencher a agenda com pacientes engajados, sempre dentro do que o CFN permite.',
		dores: [
			'Concorrência de dietas milagrosas e influenciadores sem formação',
			'Insegurança sobre o que pode divulgar sem ferir as normas do CFN',
			'Agenda com horários ociosos e baixa procura por consultas particulares',
			'Dificuldade de mostrar valor sem apelar para antes e depois sensacionalista',
		],
		comoAjudamos: [
			'Conteúdo educativo que gera autoridade e diferencia você de dietas milagrosas, dentro das normas do CFN',
			'Campanhas para atrair pacientes que valorizam acompanhamento nutricional sério e contínuo',
			'Posicionamento por especialidade, como nutrição esportiva, emagrecimento ou clínica',
			'Estrutura de agendamento e atendimento online para ampliar sua base de pacientes',
		],
		faq: [
			{
				q: 'O que o CFN permite divulgar no marketing de nutrição?',
				a: 'O conselho proíbe promessas sensacionalistas e o uso indevido de imagens de antes e depois. Trabalhamos com conteúdo educativo, informação responsável e prova de autoridade, atraindo pacientes de forma ética e sustentável.',
			},
			{
				q: 'Como me diferenciar de influenciadores e dietas da moda?',
				a: 'Reforçamos sua formação e seu método com conteúdo de qualidade que educa o público. Enquanto dietas milagrosas prometem o impossível, você se posiciona como a escolha segura e séria, o que atrai pacientes mais comprometidos.',
			},
			{
				q: 'Funciona para atendimento online?',
				a: 'Sim. Muitas consultas de nutrição funcionam bem à distância. Criamos campanhas para atendimento presencial em Londrina e online, ampliando seu alcance para pacientes de outras cidades que buscam sua especialidade.',
			},
		],
	},
	{
		slug: 'pet-shops-e-veterinarios',
		nome: 'Pet Shops e Veterinários',
		titulo: 'Marketing para Pet Shops e Veterinários em Londrina',
		descricao: 'Aumente o movimento e a recorrência do seu pet shop ou clínica veterinária em Londrina com marketing local focado em fidelização.',
		intro:
			'O mercado pet cresce todo ano, mas o tutor tem opções em cada esquina. A Matra atrai novos clientes e, principalmente, cria recorrência em banho, tosa, consultas e venda de ração para manter seu caixa girando.',
		dores: [
			'Concorrência de grandes redes e de pet shops de bairro por preço',
			'Dificuldade de criar recorrência em serviços como banho e tosa',
			'Venda de ração perdida para marketplaces e grandes lojas online',
			'Baixa procura por serviços de maior valor, como consultas e exames veterinários',
		],
		comoAjudamos: [
			'Campanhas locais para atrair novos tutores da sua região para a loja e a clínica',
			'Fluxos de recorrência no WhatsApp para lembrar banho, tosa, vacinas e recompra de ração',
			'Divulgação de serviços de maior valor, como consultas, exames e atendimento de emergência',
			'Gestão de redes sociais com conteúdo fofo e útil que gera engajamento e fidelidade',
		],
		faq: [
			{
				q: 'Como criar recorrência de clientes no pet shop?',
				a: 'Montamos fluxos automáticos que lembram o tutor do próximo banho e tosa, da vacina ou da hora de recomprar a ração. Essa comunicação constante transforma o cliente ocasional em cliente fiel, aumentando o faturamento mensal.',
			},
			{
				q: 'Dá para competir com as grandes redes e marketplaces?',
				a: 'Sim. Seu diferencial é o atendimento próximo e a confiança local. Trabalhamos esse posicionamento e criamos ofertas e recorrência que os grandes não conseguem replicar no relacionamento próximo com o tutor.',
			},
			{
				q: 'Como divulgar a parte veterinária, e não só o pet shop?',
				a: 'Criamos campanhas específicas para consultas, exames, vacinas e emergências, que têm ticket maior. Assim seu negócio não vive só de banho e tosa, e sim de todo o ciclo de cuidado com o pet.',
			},
		],
	},
	{
		slug: 'fotografos',
		nome: 'Fotógrafos',
		titulo: 'Marketing para Fotógrafos em Londrina',
		descricao: 'Encha sua agenda de ensaios e eventos em Londrina com marketing para fotógrafos focado em portfólio, autoridade e clientes que valorizam seu trabalho.',
		intro:
			'Fotografia se vende pelo olhar, mas nem sempre o melhor portfólio é o mais visto. A Matra coloca seu trabalho na frente de quem está buscando fotógrafo e ajuda você a fechar ensaios e eventos com antecedência.',
		dores: [
			'Agenda instável, com meses cheios e outros completamente vazios',
			'Clientes que só perguntam preço e nunca valorizam o trabalho autoral',
			'Dificuldade de mostrar o portfólio para quem realmente vai contratar',
			'Concorrência de amadores que cobram barato e derrubam o mercado',
		],
		comoAjudamos: [
			'Campanhas segmentadas por tipo de trabalho, como casamento, newborn, ensaio ou corporativo',
			'Presença nas redes que transforma seu portfólio em desejo e prova de qualidade',
			'Atração de clientes que valorizam fotografia autoral e pagam pelo seu diferencial',
			'Estratégias para antecipar agendamentos e preencher a agenda com meses de antecedência',
		],
		faq: [
			{
				q: 'Como atrair clientes que valorizam meu trabalho e não só o preço?',
				a: 'Trabalhamos seu posicionamento e portfólio para comunicar valor e estilo. Quando o cliente entende o diferencial da sua fotografia, a conversa deixa de ser só sobre preço e passa a ser sobre a experiência e o resultado.',
			},
			{
				q: 'O marketing ajuda a estabilizar a agenda ao longo do ano?',
				a: 'Ajuda. Planejamos campanhas para antecipar temporadas fortes, como casamentos e formaturas, e para ativar demanda nos meses fracos com ensaios e promoções pontuais. Assim a agenda fica mais previsível.',
			},
			{
				q: 'Qual rede social funciona melhor para fotógrafo?',
				a: 'Instagram costuma ser o principal, por ser visual, mas combinamos com Google e anúncios pagos conforme o seu nicho. Casamento, newborn e corporativo têm caminhos diferentes, e montamos a estratégia certa para cada um.',
			},
		],
	},
	{
		slug: 'ar-condicionado',
		nome: 'Ar Condicionado',
		titulo: 'Marketing para Ar Condicionado em Londrina',
		descricao: 'Gere orçamentos de instalação e manutenção de ar condicionado em Londrina com marketing que captura a demanda no calor e no ano todo.',
		intro:
			'Quando o calor aperta, todo mundo procura instalação de ar condicionado ao mesmo tempo. A Matra garante que sua empresa apareça primeiro nessas horas e ainda constrói uma carteira de manutenção para faturar o ano inteiro.',
		dores: [
			'Demanda concentrada no verão e faturamento fraco no resto do ano',
			'Concorrência de instaladores informais que cobram muito abaixo do mercado',
			'Dificuldade de aparecer na hora exata em que o cliente busca instalação urgente',
			'Falta de contratos de manutenção recorrente que estabilizem a receita',
		],
		comoAjudamos: [
			'Campanhas no Google para capturar quem busca instalação e conserto com urgência',
			'Estratégias para vender contratos de manutenção e limpeza recorrente o ano todo',
			'Posicionamento local para dominar as buscas por ar condicionado na sua região',
			'Captação de clientes empresariais que precisam de PMOC e manutenção preventiva',
		],
		faq: [
			{
				q: 'Como capturar o cliente na hora que ele precisa instalar o ar?',
				a: 'A busca por ar condicionado é de urgência, então investimos forte no Google Ads e no perfil do Google. Quando o cliente pesquisa instalação ou conserto, sua empresa aparece primeiro e recebe o contato imediato.',
			},
			{
				q: 'Como faturar fora da temporada de calor?',
				a: 'Estruturamos a venda de contratos de manutenção e limpeza preventiva, que geram receita recorrente independente da estação. Também trabalhamos o público empresarial, que precisa de PMOC e serviço durante todo o ano.',
			},
			{
				q: 'Dá para competir com instaladores informais?',
				a: 'Dá. Reforçamos a confiança, a garantia e a nota fiscal como diferenciais que o informal não oferece. Muitos clientes preferem pagar um pouco mais por segurança, e é esse público que atraímos para a sua empresa.',
			},
		],
	},
	{
		slug: 'energia-solar',
		nome: 'Energia Solar',
		titulo: 'Marketing para Energia Solar em Londrina',
		descricao: 'Gere leads qualificados de energia solar em Londrina com marketing que educa o cliente, quebra objeções e encurta o ciclo de venda.',
		intro:
			'Energia solar é uma venda de ticket alto e decisão demorada, cheia de dúvidas sobre economia e financiamento. A Matra gera leads qualificados e nutre esse cliente com informação até ele estar pronto para fechar.',
		dores: [
			'Ticket alto e ciclo de venda longo, com o cliente pensando por semanas',
			'Leads curiosos que pedem simulação e não têm real intenção de compra',
			'Muitas objeções sobre preço, financiamento e tempo de retorno do investimento',
			'Concorrência crescente de integradoras disputando o mesmo cliente',
		],
		comoAjudamos: [
			'Campanhas focadas em leads qualificados, com intenção real de instalar energia solar',
			'Conteúdo que educa sobre economia, financiamento e retorno para quebrar objeções antes da reunião',
			'Fluxos de nutrição no WhatsApp que acompanham o cliente durante todo o ciclo de decisão',
			'Estratégias de prova social e autoridade para gerar confiança em uma compra de alto valor',
		],
		faq: [
			{
				q: 'Como gerar leads realmente qualificados de energia solar?',
				a: 'Ajustamos a segmentação e as perguntas de qualificação para filtrar curiosos. O objetivo não é volume, e sim contatos com conta de luz e perfil compatíveis, o que aumenta a taxa de fechamento da sua equipe comercial.',
			},
			{
				q: 'O marketing ajuda a encurtar o ciclo de venda?',
				a: 'Ajuda. Com conteúdo que educa sobre economia, payback e financiamento, o cliente chega à reunião com as principais objeções já respondidas. Isso acelera a decisão e melhora a produtividade do seu time de vendas.',
			},
			{
				q: 'Como me diferenciar das outras integradoras?',
				a: 'Construímos autoridade com prova social, projetos realizados e transparência sobre economia real. Numa compra de valor alto, confiança é decisiva, e é esse posicionamento que fazemos a sua empresa transmitir.',
			},
		],
	},
	{
		slug: 'lojas-de-veiculos',
		nome: 'Lojas de Veículos',
		titulo: 'Marketing para Lojas de Veículos em Londrina',
		descricao: 'Gere contatos qualificados para sua loja de veículos em Londrina com marketing que anuncia o estoque certo e acelera as vendas no WhatsApp.',
		intro:
			'Vender carro hoje começa muito antes do test drive: o cliente pesquisa e negocia pelo WhatsApp. A Matra coloca seu estoque na frente de quem está pronto para comprar e ajuda seu time a fechar mais negócios.',
		dores: [
			'Estoque que gira devagar e capital parado no pátio',
			'Leads desqualificados que pedem preço e sumem no WhatsApp',
			'Concorrência de grandes revendas e de plataformas como OLX e Webmotors',
			'Dificuldade de destacar veículos específicos e de vender financiamento',
		],
		comoAjudamos: [
			'Campanhas no Meta e Google Ads promovendo os veículos certos para o público certo',
			'Fluxos de atendimento no WhatsApp para responder rápido e não perder o comprador quente',
			'Estratégias para girar estoque parado e destacar oportunidades de financiamento',
			'Gestão de redes sociais com vídeos e fotos que aumentam o desejo e o volume de contatos',
		],
		faq: [
			{
				q: 'Como gerar contatos mais qualificados para a loja?',
				a: 'Segmentamos as campanhas por perfil de comprador e faixa de veículo, e trabalhamos o atendimento no WhatsApp para qualificar rápido. Assim seu vendedor gasta tempo com quem tem real intenção e capacidade de compra.',
			},
			{
				q: 'Dá para girar veículos que estão parados no estoque?',
				a: 'Dá. Criamos campanhas específicas para os carros que precisam sair, ajustando oferta e público. Anunciar o veículo certo para quem o procura acelera a venda e libera capital para novas aquisições.',
			},
			{
				q: 'Como competir com OLX e grandes revendas?',
				a: 'Além de estar presente nesses canais, construímos sua marca local com redes sociais, avaliações e anúncios próprios. Isso cria confiança e faz o cliente escolher sua loja pela reputação, não só pelo preço listado.',
			},
		],
	},
	{
		slug: 'imobiliarias',
		nome: 'Imobiliárias',
		titulo: 'Marketing para Imobiliárias em Londrina',
		descricao: 'Gere leads qualificados de compra e locação para sua imobiliária em Londrina e capte novos imóveis com marketing orientado a resultado.',
		intro:
			'Imobiliária vive de dois lados: captar bons imóveis e encontrar o comprador certo. A Matra gera leads qualificados para os dois e alimenta seu time de corretores com contatos que realmente avançam na negociação.',
		dores: [
			'Leads desqualificados que consomem o tempo dos corretores sem fechar',
			'Ciclo de venda longo, com o cliente comparando por meses antes de decidir',
			'Dificuldade de captar novos imóveis para manter a carteira atrativa',
			'Dependência de portais caros como ZAP e VivaReal para gerar contato',
		],
		comoAjudamos: [
			'Campanhas segmentadas por tipo de imóvel, região e perfil de comprador ou locatário',
			'Captação de proprietários que querem vender ou alugar, alimentando sua carteira',
			'Fluxos de nutrição para acompanhar o cliente durante o longo ciclo de decisão',
			'Presença digital própria para reduzir a dependência dos portais e do custo por lead',
		],
		faq: [
			{
				q: 'Como gerar leads mais qualificados para os corretores?',
				a: 'Segmentamos por região, tipo e faixa de valor do imóvel, e usamos qualificação no primeiro contato. Isso reduz o volume de curiosos e entrega ao corretor pessoas com real intenção e capacidade de fechar negócio.',
			},
			{
				q: 'O marketing ajuda a captar novos imóveis?',
				a: 'Sim. Criamos campanhas voltadas a proprietários que querem vender ou alugar, um lado muitas vezes esquecido. Uma carteira forte de bons imóveis é o que atrai compradores e diferencia a sua imobiliária no mercado.',
			},
			{
				q: 'Dá para depender menos dos portais imobiliários?',
				a: 'Dá. Construindo presença própria no Google, redes sociais e anúncios diretos, você gera leads sem pagar caro por contato aos portais. Eles continuam úteis, mas deixam de ser sua única fonte de clientes.',
			},
		],
	},
	{
		slug: 'marmorarias',
		nome: 'Marmorarias',
		titulo: 'Marketing para Marmorarias em Londrina',
		descricao: 'Gere orçamentos de bancadas e revestimentos para sua marmoraria em Londrina com marketing que atrai clientes finais, arquitetos e marceneiros.',
		intro:
			'Marmoraria depende de orçamento de obra e de indicação de arquitetos e marceneiros. A Matra amplia esses dois canais, gerando pedidos de orçamento diretos e fortalecendo sua marca junto a quem especifica o material.',
		dores: [
			'Demanda muito ligada ao ritmo da construção civil e a indicações',
			'Concorrência que fecha orçamento só pelo menor preço por metro quadrado',
			'Dificuldade de aparecer para o cliente final que está reformando ou construindo',
			'Pouca proximidade com arquitetos e marceneiros que especificam o material',
		],
		comoAjudamos: [
			'Campanhas para atrair o cliente final que está em obra ou reforma e precisa de bancadas',
			'Portfólio nas redes com fotos de acabamentos que valorizam o seu trabalho e o ticket',
			'Estratégias de relacionamento com arquitetos e marceneiros que indicam sua marmoraria',
			'Presença no Google otimizada para quem busca granito, mármore e quartzo na região',
		],
		faq: [
			{
				q: 'Como atrair o cliente final, e não só depender de indicação?',
				a: 'Trabalhamos anúncios e presença no Google para quem está reformando cozinha ou banheiro e busca bancadas. Isso cria um canal de orçamentos direto, que soma às indicações de arquitetos e marceneiros que você já tem.',
			},
			{
				q: 'Como me diferenciar da concorrência que só briga por preço?',
				a: 'Destacamos qualidade de acabamento, variedade de materiais e prazo de entrega com um portfólio visual forte. Quando o cliente vê o resultado, a decisão deixa de ser só o metro quadrado mais barato.',
			},
			{
				q: 'Vale a pena investir em relacionamento com arquitetos?',
				a: 'Muito. Arquitetos e marceneiros especificam material e trazem obras recorrentes. Criamos ações e conteúdo direcionados a esse público para que a sua marmoraria seja a primeira lembrada na hora de indicar.',
			},
		],
	},
	{
		slug: 'marcenarias',
		nome: 'Marcenarias',
		titulo: 'Marketing para Marcenarias em Londrina',
		descricao: 'Gere orçamentos de móveis sob medida para sua marcenaria em Londrina com marketing que valoriza o projeto e atrai clientes de ticket alto.',
		intro:
			'Móvel sob medida é uma decisão cara e pensada, feita por quem valoriza projeto e acabamento. A Matra atrai esse cliente certo para a sua marcenaria e destaca seu trabalho para quem não decide apenas pelo preço.',
		dores: [
			'Ticket alto e ciclo de decisão longo, com muitos orçamentos que não fecham',
			'Concorrência de lojas de planejados de grandes marcas e de fábricas',
			'Dificuldade de mostrar a qualidade do projeto sob medida antes da venda',
			'Dependência quase total de indicação, sem canal próprio de novos clientes',
		],
		comoAjudamos: [
			'Campanhas para atrair clientes que valorizam móvel sob medida e acabamento diferenciado',
			'Portfólio nas redes com projetos executados que geram desejo e comprovam qualidade',
			'Relacionamento com arquitetos e designers que especificam e indicam marcenaria',
			'Fluxos de acompanhamento para não perder orçamentos durante o ciclo de decisão',
		],
		faq: [
			{
				q: 'Como atrair clientes que valorizam o móvel sob medida?',
				a: 'Focamos em um público que busca personalização e qualidade, não o mais barato. Com portfólio e conteúdo que mostram o resultado do sob medida, atraímos quem entende o valor do seu trabalho e paga por ele.',
			},
			{
				q: 'Como competir com as grandes lojas de planejados?',
				a: 'Seu diferencial é a personalização real e o acabamento artesanal, que as grandes fábricas não entregam. Comunicamos exatamente isso, posicionando a marcenaria como a escolha de quem quer um projeto único e bem feito.',
			},
			{
				q: 'O marketing ajuda a fechar mais orçamentos?',
				a: 'Ajuda. Além de trazer clientes mais qualificados, criamos fluxos de acompanhamento que mantêm o contato aquecido durante a decisão. Como o ciclo é longo, esse follow-up estruturado aumenta a taxa de fechamento.',
			},
		],
	},
	{
		slug: 'moveis-planejados',
		nome: 'Móveis Planejados',
		titulo: 'Marketing para Móveis Planejados em Londrina',
		descricao: 'Gere leads qualificados para sua loja de móveis planejados em Londrina com marketing que valoriza o projeto 3D e atrai clientes de alto padrão.',
		intro:
			'Móveis planejados envolvem projeto, showroom e uma decisão de valor alto que passa por várias etapas. A Matra gera leads qualificados e nutre o cliente do primeiro interesse até a assinatura do contrato.',
		dores: [
			'Ticket alto e decisão longa, com o cliente visitando vários showrooms',
			'Leads que pedem projeto e orçamento, mas não têm intenção real de fechar',
			'Concorrência acirrada entre grandes marcas e lojas independentes',
			'Dependência de parcerias com construtoras e arquitetos para novos negócios',
		],
		comoAjudamos: [
			'Campanhas segmentadas para atrair clientes de alto padrão em fase de mobiliar o imóvel',
			'Conteúdo e projetos 3D nas redes que geram desejo e mostram o resultado final',
			'Fluxos de nutrição no WhatsApp para acompanhar o cliente ao longo de todo o ciclo',
			'Estratégias de relacionamento com construtoras e arquitetos que geram indicações',
		],
		faq: [
			{
				q: 'Como gerar leads qualificados para móveis planejados?',
				a: 'Segmentamos por perfil, região e momento de compra, mirando quem acabou de adquirir ou reformar um imóvel. Com qualificação no atendimento, entregamos ao consultor contatos com real potencial de fechar o projeto.',
			},
			{
				q: 'O projeto 3D ajuda na venda pelo marketing?',
				a: 'Muito. Mostrar projetos e ambientes finalizados nas redes e nos anúncios gera desejo e ajuda o cliente a visualizar o resultado. Isso aproxima a decisão e diferencia sua loja de quem só divulga preço.',
			},
			{
				q: 'Como aproveitar parcerias com construtoras e arquitetos?',
				a: 'Criamos ações e conteúdo direcionados a esse público, que influencia diretamente na escolha dos planejados. Estar presente e ser lembrado por construtoras e arquitetos abre um fluxo constante de indicações qualificadas.',
			},
		],
	},
];
