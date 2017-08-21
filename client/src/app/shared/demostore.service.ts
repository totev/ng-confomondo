import { Conference } from '../conference/conference';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import *  as uuid from 'uuid';
import { sampleSize } from 'lodash';
import { Observable } from "rxjs/Observable";
import 'rxjs/observable/of';

@Injectable()
export class DemoStoreService {
  /*
Generated by http://www.json-generator.com/
with:

[
  '{{repeat(5, 7)}}', {
      uuid: '{{guid()}}',
      topic: '{{lorem(1, "paragraphs")}}',
      name: '{{lorem(1, "sentences")}}',
      details:  '{{lorem(1, "sentences")}}',
      logoURL: 'https://unsplash.it/300/200?random',
      speakers:[  '{{repeat(1, 3)}}', {
        name: '{{firstName()}} {{surname()}}',
        company: '{{company().toUpperCase()}}',
          bio: '{{lorem(1, "paragraphs")}}'
      }],
     location: {
      city: ' {{city()}}',
      country: '{{country()}}',
      place: '{{state()}}',
      gps: {
        latitude: '{{floating(-90.000001, 90)}}',
        longitude: '{{floating(-180.000001, 180)}}'
      }
    }
    }

]
    */

  private confs: Conference[] =

  [
    {
      "uuid": "6f6736aa-e5fc-49c4-8f90-dcfc2063fb0c",
      "topic": "Eu do ut aute tempor non.",
      "name": "Nisi est exercitation quis dolore irure esse aute anim dolor sunt cillum.",
      "details": "Deserunt laborum elit exercitation sunt ex quis quis. Aliqua esse nulla culpa non. Pariatur aliquip eiusmod cupidatat occaecat anim qui Lorem occaecat labore aliquip mollit non ea ullamco. Dolore voluptate esse sit nisi quis magna quis laboris irure mollit ad.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Carol Stuart",
          "company": "ARCTIQ",
          "bio": "Duis ipsum eiusmod adipisicing aliquip cillum aliquip commodo ullamco velit nisi sit. Laboris fugiat id qui esse Lorem adipisicing mollit tempor culpa qui enim mollit minim reprehenderit. Aliqua ut deserunt do ea nisi enim minim ipsum eu cillum magna. Aliqua aute tempor est anim est consequat eiusmod. Ea est dolor labore labore. Cillum in ullamco commodo laboris aute ipsum enim commodo mollit est magna.\r\n"
        },
        {
          "name": "Lynnette Tyson",
          "company": "EXOPLODE",
          "bio": "Minim proident ipsum ad velit eiusmod. Reprehenderit elit aliquip irure cupidatat qui sunt nostrud reprehenderit occaecat deserunt dolore culpa. Ex reprehenderit do consequat sit ut tempor velit nisi aute laborum cillum nostrud. Aute ullamco duis aliquip proident ullamco. Cillum ea nisi laboris mollit ut reprehenderit sunt minim ad irure consectetur. Veniam cillum consequat reprehenderit ad anim aliquip velit proident.\r\n"
        },
        {
          "name": "Valeria Cooke",
          "company": "ACUSAGE",
          "bio": "Sunt sit aliqua ea officia Lorem eiusmod veniam aute sint mollit culpa. Sunt minim deserunt nostrud laborum et. Id duis quis nostrud deserunt consectetur eu. Eiusmod adipisicing sit mollit ea non. Mollit duis amet non Lorem anim ipsum amet tempor. Consequat amet fugiat excepteur voluptate cillum. Ea ad velit non est.\r\n"
        }
      ],
      "location": {
        "city": " Coral",
        "country": "Bouvet Island",
        "place": "Hawaii",
        "gps": {
          "latitude": -78.133708,
          "longitude": 162.043179
        }
      }
    },
    {
      "uuid": "6d6e42da-ff9b-4f28-a128-76640cbdd3fa",
      "topic": "Dolor eu voluptate occaecat consectetur dolore ipsum ullamco aliquip enim est.",
      "name": "Officia non minim aliquip enim est Lorem occaecat ex veniam quis.",
      "details": "Dolor eu et labore sint Lorem aliqua. Sit consectetur nisi ipsum labore consequat sint Lorem aliqua non cupidatat dolore ad. Cillum laboris qui ipsum officia et occaecat excepteur ea officia fugiat eu non aliquip cillum. Laboris proident Lorem voluptate tempor irure non nisi incididunt. Labore fugiat non aliqua nisi ea ad ut nisi duis commodo culpa sint. Et sit proident enim enim. Cupidatat adipisicing ipsum Lorem nulla reprehenderit quis cupidatat voluptate voluptate voluptate quis quis anim Lorem.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Sutton Velez",
          "company": "AQUAMATE",
          "bio": "Ad aute consequat culpa dolore cillum est consectetur nisi ipsum deserunt. Deserunt eiusmod labore laboris Lorem reprehenderit id voluptate duis laboris ex. Incididunt in aliquip aute sunt qui consequat nulla id ex consequat. Exercitation occaecat consectetur qui tempor. Sint occaecat voluptate amet fugiat occaecat occaecat esse cillum consectetur nostrud sit consequat dolore incididunt.\r\n"
        },
        {
          "name": "Poole Calderon",
          "company": "SONGBIRD",
          "bio": "Eu incididunt enim aliquip laboris. Voluptate duis velit nostrud ex. Amet sunt aliquip dolor laborum.\r\n"
        },
        {
          "name": "Rowena Farley",
          "company": "AEORA",
          "bio": "Magna consequat consequat anim velit adipisicing deserunt laborum commodo enim duis enim fugiat deserunt officia. In dolore anim deserunt elit minim voluptate ipsum laboris aliquip ex tempor qui culpa. Magna aliquip exercitation nisi Lorem anim deserunt nisi irure ullamco pariatur ea. Ut occaecat aliqua non id veniam id et cupidatat cupidatat minim sit consectetur amet.\r\n"
        }
      ],
      "location": {
        "city": " Dragoon",
        "country": "Martinique",
        "place": "Utah",
        "gps": {
          "latitude": -0.033256,
          "longitude": -115.518012
        }
      }
    },
    {
      "uuid": "f1032788-4531-4b90-8761-38ed9c89465a",
      "topic": "Nulla consectetur voluptate incididunt ut eiusmod quis.",
      "name": "Ullamco ut in aute pariatur excepteur nostrud.",
      "details": "Esse ex excepteur ullamco irure laborum. Amet nisi quis cillum ad incididunt pariatur ad et do occaecat. Laborum est adipisicing elit esse id id. Enim id officia culpa laboris elit nostrud ipsum fugiat eiusmod irure dolor nostrud. Mollit velit aute enim sunt eu fugiat do enim nulla consectetur.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Molina Robertson",
          "company": "ZILLIDIUM",
          "bio": "Aliqua eu reprehenderit sit ea ex. Ipsum anim non laborum sit mollit anim excepteur. Et culpa ad magna culpa ad ullamco velit voluptate nulla dolore excepteur. Labore irure cupidatat occaecat occaecat qui anim.\r\n"
        },
        {
          "name": "Wilma Bowers",
          "company": "QUONK",
          "bio": "Elit consectetur nulla excepteur enim culpa incididunt laboris nisi reprehenderit tempor sint do. Sit nostrud amet fugiat minim reprehenderit sit. Non officia excepteur reprehenderit adipisicing adipisicing ea do exercitation veniam in dolore. Veniam consectetur consectetur dolor proident.\r\n"
        },
        {
          "name": "Winifred Gardner",
          "company": "JETSILK",
          "bio": "Qui voluptate quis Lorem magna qui amet nulla culpa eu cupidatat labore. Amet qui est aute veniam dolore exercitation qui duis est minim non. Ad sunt aute amet dolore mollit et consequat duis ipsum. Sint esse dolore voluptate deserunt sunt officia nisi ex do labore nisi exercitation. Nisi id do ex consequat ad. Ipsum cillum est veniam sit esse commodo officia irure cupidatat.\r\n"
        }
      ],
      "location": {
        "city": " Bourg",
        "country": "Djibouti",
        "place": "Vermont",
        "gps": {
          "latitude": -62.33103,
          "longitude": -141.319252
        }
      }
    },
    {
      "uuid": "4c33e622-8b16-4d41-88f2-8e5979fb7943",
      "topic": "Voluptate ipsum ut in nostrud consequat fugiat.",
      "name": "Eiusmod nulla enim laborum reprehenderit sint culpa sit fugiat laborum deserunt ea.",
      "details": "Mollit nisi et nostrud do elit labore et minim voluptate officia. Do laboris ipsum consectetur eiusmod officia minim veniam veniam mollit elit minim amet. Proident duis sit aliquip cupidatat ipsum reprehenderit non proident deserunt irure amet sit dolor magna. Duis consequat excepteur nulla reprehenderit.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Booker Barber",
          "company": "SILODYNE",
          "bio": "Velit eiusmod eiusmod dolore adipisicing id. Proident irure magna et quis qui qui cupidatat cillum sint ut excepteur qui esse eiusmod. Eiusmod Lorem laborum id tempor consequat magna elit minim nostrud eiusmod anim fugiat aliqua nisi. Veniam amet commodo pariatur exercitation excepteur.\r\n"
        },
        {
          "name": "Schroeder Atkins",
          "company": "AVENETRO",
          "bio": "Lorem pariatur est nostrud velit elit et. Duis et non nostrud aliquip ipsum pariatur velit amet fugiat eu sint sit. Eu dolore nisi elit Lorem tempor adipisicing sint eu voluptate elit esse.\r\n"
        },
        {
          "name": "Kay Forbes",
          "company": "SHOPABOUT",
          "bio": "Esse veniam et non et occaecat dolore eu laboris anim irure Lorem culpa irure. Tempor aliqua amet deserunt cillum ullamco reprehenderit sit ea tempor elit qui ad. Est nisi ea qui nisi incididunt laboris quis laboris reprehenderit tempor eu ea non labore. Enim commodo est laboris sint cupidatat sunt id sint commodo adipisicing id duis.\r\n"
        }
      ],
      "location": {
        "city": " Glenville",
        "country": "Yemen",
        "place": "North Carolina",
        "gps": {
          "latitude": -0.133774,
          "longitude": 31.955522
        }
      }
    },
    {
      "uuid": "e9d4237e-a16b-4b42-803c-9f01cad06adb",
      "topic": "Amet magna officia exercitation qui excepteur excepteur.",
      "name": "Nisi enim irure esse qui adipisicing elit ex laboris.",
      "details": "Irure aliquip voluptate adipisicing cillum sint. Ullamco duis elit dolore enim. Quis officia excepteur dolor veniam eiusmod sint eiusmod ex sunt irure non Lorem Lorem. Minim eu enim enim ad laborum id mollit sunt laborum duis proident cupidatat ut. Aliquip id ea fugiat sit ipsum ad do ut commodo aliqua.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Wendy Harding",
          "company": "ANARCO",
          "bio": "Mollit nostrud commodo ullamco et ut irure irure adipisicing minim occaecat voluptate velit. Nulla consequat adipisicing officia non occaecat excepteur amet. Dolore ipsum qui pariatur consectetur eiusmod. Sit eu pariatur exercitation duis. Ipsum tempor eiusmod consequat do reprehenderit pariatur aliqua eu eu irure laborum et minim commodo. Commodo exercitation laborum est pariatur quis commodo aliquip dolore pariatur. Sit ea adipisicing laborum fugiat et officia qui et mollit ad tempor.\r\n"
        },
        {
          "name": "Laurel Brooks",
          "company": "UNQ",
          "bio": "Eiusmod ut nisi in enim aute proident. Deserunt aute in esse fugiat do adipisicing eiusmod aute enim dolor ipsum aute magna. Minim est id fugiat sunt esse irure nostrud pariatur irure nostrud in mollit magna enim.\r\n"
        }
      ],
      "location": {
        "city": " Homeland",
        "country": "Somalia",
        "place": "Massachusetts",
        "gps": {
          "latitude": -25.833427,
          "longitude": 33.623338
        }
      }
    },
    {
      "uuid": "1326a5fb-fc21-4fde-a27c-77164bf742af",
      "topic": "Exercitation id sit nisi cillum labore culpa et culpa voluptate excepteur id.",
      "name": "Ad eu proident mollit occaecat enim id in occaecat.",
      "details": "Anim nisi sint exercitation sit sint consectetur enim veniam cupidatat. Sint qui adipisicing mollit ut culpa labore nostrud proident excepteur nostrud eu ea non. Consequat dolore Lorem sunt laboris ex cupidatat. Ex cupidatat anim nisi eu anim duis aliquip amet ut id adipisicing ullamco.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Woods Rodgers",
          "company": "DECRATEX",
          "bio": "Aute anim esse veniam sint sunt id labore laborum consequat consequat commodo. Amet reprehenderit et esse esse eu fugiat exercitation nostrud amet excepteur. Laborum pariatur officia ipsum laboris proident laborum dolor culpa. Laboris ipsum pariatur proident esse duis sunt deserunt adipisicing magna amet labore eiusmod minim do.\r\n"
        },
        {
          "name": "Gena Cunningham",
          "company": "TUBESYS",
          "bio": "Voluptate adipisicing exercitation pariatur consectetur magna reprehenderit. Laboris consectetur ullamco enim nulla aute aute cillum eu. Ea magna minim elit esse veniam. Ipsum pariatur qui consectetur ea sint occaecat in id excepteur in. Amet anim aliquip est tempor qui ad.\r\n"
        },
        {
          "name": "Rivas Garcia",
          "company": "OULU",
          "bio": "Mollit excepteur cillum labore quis labore reprehenderit. Nostrud eiusmod cillum culpa ut aliquip occaecat culpa. Minim id do consectetur elit commodo ut et duis voluptate in. Ut aute ex pariatur pariatur occaecat adipisicing amet. Sunt in in consequat sunt amet occaecat officia fugiat amet.\r\n"
        }
      ],
      "location": {
        "city": " Alafaya",
        "country": "Mozambique",
        "place": "Guam",
        "gps": {
          "latitude": -59.944815,
          "longitude": 110.003645
        }
      }
    },
    {
      "uuid": "ba50e5f1-fdfd-4b93-a6fe-89ae00d16580",
      "topic": "Officia aliquip qui anim laborum ea deserunt deserunt magna.",
      "name": "Adipisicing ut do eiusmod consectetur aute officia excepteur eiusmod in.",
      "details": "Occaecat occaecat excepteur mollit amet. Non sint consequat reprehenderit ut laboris ut enim in velit incididunt Lorem aute. Cillum officia consectetur veniam nostrud eiusmod nisi sint veniam laborum exercitation cillum dolore. Excepteur pariatur aliquip sint veniam enim cupidatat cillum elit fugiat.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Nora Larsen",
          "company": "INTERFIND",
          "bio": "Irure velit aliquip fugiat duis proident in adipisicing amet elit reprehenderit culpa ullamco occaecat exercitation. Non quis qui duis duis reprehenderit consectetur veniam aliquip nostrud culpa esse eu esse sunt. Duis veniam et exercitation reprehenderit do laborum aliqua pariatur incididunt.\r\n"
        },
        {
          "name": "Mosley Willis",
          "company": "KOG",
          "bio": "Minim aute nulla quis consequat deserunt sint sit. Sunt proident cupidatat ea cillum tempor commodo. Consequat mollit excepteur officia aliqua duis Lorem ad deserunt excepteur aute et enim. Officia minim laboris laboris non sit. Commodo reprehenderit dolore mollit est minim aliquip cillum. Nostrud id nisi ad laboris adipisicing amet sunt nisi mollit laborum culpa do.\r\n"
        }
      ],
      "location": {
        "city": " Courtland",
        "country": "Libya",
        "place": "Louisiana",
        "gps": {
          "latitude": 25.848574,
          "longitude": -114.493171
        }
      }
    },
    {
      "uuid": "b425d147-b60d-4b8e-98b8-51926b20efa3",
      "topic": "Consequat nostrud sint aliquip adipisicing eu proident dolore consectetur.",
      "name": "Ea sit excepteur qui amet adipisicing eiusmod aute ullamco non incididunt occaecat magna.",
      "details": "Exercitation laborum mollit incididunt laboris incididunt fugiat consequat ex quis in quis commodo. Culpa consequat mollit ut magna culpa consequat officia. Culpa elit anim voluptate aliqua mollit consectetur mollit Lorem cillum Lorem cillum id ex. Duis dolore deserunt consequat sunt adipisicing reprehenderit occaecat fugiat.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Wheeler Haney",
          "company": "REALMO",
          "bio": "Incididunt et in do et ad pariatur do amet ullamco elit commodo ut. Consectetur cillum magna laboris aute Lorem mollit voluptate deserunt occaecat officia id aute nisi. Id ut ullamco labore laboris quis Lorem mollit culpa esse veniam eu sint dolor aliquip.\r\n"
        },
        {
          "name": "Kaitlin George",
          "company": "MANTRO",
          "bio": "Proident reprehenderit et labore exercitation qui elit aute consectetur. Quis ut deserunt ipsum commodo cillum velit sit eiusmod quis. Consectetur in esse cillum incididunt duis nulla amet aliqua exercitation excepteur dolor incididunt pariatur. Ea culpa enim minim irure qui pariatur amet dolore laboris magna ad proident non. Proident cupidatat dolor id mollit tempor adipisicing anim eu.\r\n"
        },
        {
          "name": "Solomon Peterson",
          "company": "EXOTECHNO",
          "bio": "Ipsum est pariatur culpa sint consequat ut adipisicing sit laboris voluptate exercitation. Duis amet enim tempor excepteur sint minim est proident. Officia sit id adipisicing non ad proident commodo non enim in. Dolore elit consectetur eiusmod tempor irure voluptate nisi fugiat cupidatat aliquip fugiat ut. Nulla est nisi mollit tempor enim sit elit culpa Lorem excepteur irure proident pariatur. Laboris mollit elit aliqua qui velit officia dolore ullamco laboris commodo magna esse. Nulla laboris aliquip nulla labore est ex exercitation Lorem aute tempor incididunt commodo.\r\n"
        }
      ],
      "location": {
        "city": " Loretto",
        "country": "New Zealand",
        "place": "Maine",
        "gps": {
          "latitude": -60.129968,
          "longitude": -93.143776
        }
      }
    },
    {
      "uuid": "a29622aa-922e-4b76-a4ab-41e2f8cc7745",
      "topic": "Anim irure est consequat sint culpa deserunt laboris veniam adipisicing eiusmod.",
      "name": "Esse sit dolore minim tempor eiusmod aliqua enim enim adipisicing sint ipsum.",
      "details": "Fugiat nulla duis cillum exercitation consectetur in reprehenderit duis et. Culpa eiusmod commodo nisi eiusmod qui exercitation ex do minim reprehenderit aute. Magna id fugiat id duis aute id dolore velit nisi fugiat ad laboris qui magna. Nostrud laborum adipisicing exercitation occaecat anim. Culpa et esse et aliqua sit eiusmod do in nostrud culpa proident officia sint anim.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Melinda Crosby",
          "company": "UXMOX",
          "bio": "Ea culpa dolor labore elit elit nulla officia cillum dolor anim proident. Ad pariatur incididunt duis Lorem minim dolor. Pariatur adipisicing veniam qui elit incididunt dolore ipsum et pariatur nisi ullamco sit id. Amet aliqua elit dolor officia. Do nisi mollit commodo excepteur ullamco anim velit. Nostrud proident est commodo adipisicing incididunt pariatur ad elit nostrud consequat esse.\r\n"
        }
      ],
      "location": {
        "city": " Drummond",
        "country": "Israel",
        "place": "Maryland",
        "gps": {
          "latitude": 17.816259,
          "longitude": 176.420057
        }
      }
    },
    {
      "uuid": "4d8147f6-7f58-4fc5-a3aa-ac8b2ade220e",
      "topic": "Duis et adipisicing reprehenderit est qui non id anim cillum laborum do.",
      "name": "Voluptate deserunt dolore ad aliqua quis excepteur et non duis dolore.",
      "details": "Id proident id reprehenderit esse non mollit proident exercitation incididunt mollit commodo. Ea eu minim veniam ullamco amet consequat esse nisi. Eiusmod tempor non aute mollit dolor dolor incididunt ex excepteur laborum qui anim sit anim. Duis laborum est fugiat in ex officia tempor commodo culpa elit qui et elit voluptate.\r\n",
      "logoURL": "https://unsplash.it/300/200?random",
      "speakers": [
        {
          "name": "Lancaster Mcclain",
          "company": "OATFARM",
          "bio": "Cillum proident cillum qui est consequat sint enim nisi cillum laboris non. Aliqua quis commodo ad non quis est adipisicing reprehenderit. Adipisicing ex officia ipsum nisi. Cillum aliquip ad deserunt commodo.\r\n"
        },
        {
          "name": "Meyer Lindsay",
          "company": "IRACK",
          "bio": "Voluptate qui anim in cillum id proident culpa ut consectetur qui quis voluptate. Do aute sunt reprehenderit consequat minim reprehenderit excepteur labore ipsum est do commodo occaecat ea. Mollit duis veniam adipisicing commodo eu qui consectetur. Labore sunt anim laborum ipsum exercitation adipisicing labore aliqua veniam nulla duis reprehenderit ex cillum.\r\n"
        },
        {
          "name": "Rochelle Ortega",
          "company": "OPTICOM",
          "bio": "Dolore anim fugiat ea aute culpa dolore reprehenderit do dolor elit eiusmod et nostrud amet. Dolor Lorem reprehenderit nulla consectetur sunt ullamco amet proident dolor exercitation ea veniam anim. Reprehenderit aute minim cupidatat do fugiat velit ullamco commodo non consequat duis culpa cillum ea. Reprehenderit est eiusmod sunt deserunt voluptate proident enim ad velit pariatur dolore nostrud anim. Pariatur fugiat sint mollit consectetur officia aute ex duis velit sint ex incididunt. Aliquip tempor nisi irure cillum quis quis voluptate pariatur excepteur. Est cupidatat aliqua sint tempor duis id officia nisi.\r\n"
        }
      ],
      "location": {
        "city": " Navarre",
        "country": "Zaire",
        "place": "Nebraska",
        "gps": {
          "latitude": 10.129536,
          "longitude": 76.458971
        }
      }
    }
  ];

  constructor() { }


  generateConferences(): Conference[] {

    return this.confs;
  }


  getConferenceById(uuid: string): Promise<Conference> {
    const availableConfs = this.generateConferences();
    return Promise.resolve(availableConfs.find(conf => conf.uuid === uuid));
  }

  getRandomConferences(count: number = 3): Observable<Conference[]> {
    const availableConfs = this.generateConferences();
    const randomConfs = sampleSize(availableConfs, count);
    return Observable.of(randomConfs);
  }

}
