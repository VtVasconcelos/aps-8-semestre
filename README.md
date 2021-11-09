#Passo 1. 

instalei o expo e criei um projeto react-native

#Passo 2. 

criei os arquivos das telas ( home e mapa até agora ) e exportei

#Passo 3. 

instalei o react-navigation e importei no arquivo App, depois importei as telas (home e mapa), criei o objeto do react navigation bonitinho e coloquei as telas nele, e configurei os icones das telas

#Passo 4. 

depois eu formatei e inseri os textos na home (coloquei botao, imagem, mudança de css)

#Passo 5. 

##MAPA
   1. criei um state chamado location( localização ( usada no mapa ) ) usando o UseState( hook react ) o state location eu planejava usar pra pegar a localização do celular pra conseguir mostrar as estações mais próximas da pessoa, no momento só é usado como parametro inicial do mapa, ai ele ja na geolocalização que tem lá

   2. criei outro state chamado markers( as marcações no mapa )

   3. populei o state de markers usando o axios e enviando uma requisição get pra api do site https://waqi.info/ (esse cara ficou dentro de outro hook react chamado useEffect)
   
   4. criei os componentes do mapa inicial, sem nenhuma marcação e abrindo na geolocalização que está no location
   
   5. usei o markers( que no momento é um array contendo todas as marcações ) (usei o .map pra mapear ele) e pra cada marcação eu criei um componente Marker dentro do mapa, que possui a geolocalização de cada estação.
   
   6. Para personalizar o Marker padrão (mudança de estilo, cor etc) eu criei uma função que retorna uma cor de fundo e uma cor de texto de acordo com o valor passado ( esse valor seria a qualidade do ar ), eu usei os mesmos parametros de coloração do site q eu peguei os dados ( vc encontra no final dessa pagina https://aqicn.org/faq/2015-03-15/air-quality-nowcast-a-beginners-guide/) ( então se eu passo um valor 20 por exemplo a função me retornaria a cor de fundo verde e a cor de texto branca, isso dentro de um objeto )
        
        exemplo:
            
            passei para a função o valor 20 = getColorAccordingToValue(20)
            
            a função vai me retornar um objeto
            
            {
                bg_color:"verde"
                
                text_color:"branco"
                
            }
            
            no codigo eu acesso diretamente, então eu consigo acessar esse objeto de cima assim
            
            getColorAccordingToValue(20).bg_color (que seria verde)
            
            além disso eu também personalizei o tooltip, que seria o textinho que aparece quando alguem clica em cima da estação, como dado eu passei o nome da estação
            
#Passo 6. 

Para executar eu usei o comando expo start e instalei o expo no celular

#expo

Expo é uma estrutura e uma plataforma para aplicações universais react. É um conjunto de ferramentas e serviços construídos em torno de plataformas nativas react native que ajudam você a desenvolver, construir, implantar e rapidamente iterar em aplicativos iOS, Android e web a partir da mesma base de código JavaScript/TypeScript.

#react-navigation

Roteamento e navegação para aplicativos Expo e React Native.

#axios

A Axios é um cliente HTTP baseado em promises para node.js. É isomórfico (= pode ser executado no navegador e nodejs com a mesma base de código). No lado do servidor ele usa o node.js nativo, enquanto no cliente (navegador) ele usa XMLHttpRequests.http

#react-native

Com o React Native conseguimos desenvolver aplicações para Android e iOS utilizando um código único;

Por ser multiplataforma, podemos desenvolver aplicações com React Native utilizando qualquer sistema operacional (Windows, macOS ou Linux).

Empresas que o utilizam

Por ser amplamente adotado na comunidade mobile, o React Native atraiu a atenção de diversas empresas, que fizeram questão de utilizá-lo em suas soluções mobile. Dentre estas empresas, podemos citar:

AirBnb: O AirBnb é uma das principais empresas a utilizar o React Native para seu aplicativo móvel;

Wix: O Wix, plataforma online de criação de sites, também utiliza o React Native em seu aplicativo mobile;

Facebook: Claro que o Facebook, empresa por trás do React Native, também iria utilizá-la para seu aplicativo móvel;

Tesla: A Tesla, principal montadora de carros elétricos, também utiliza esta tecnologia para seu aplicativo móvel;

Instagram: Além do Facebook, o Instagram (rede social do mesmo grupo), também utiliza o React Native para o desenvolvimento do seu app.


#react-native-maps

React Native Map components for iOS + Android

#github 

para o gerenciamento do projeto
