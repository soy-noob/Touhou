var charNameCN = document.getElementById("charNameCN");
var charNameEN = document.getElementById("charNameEN");
var charTitle = document.getElementById("charTitle");
var charIntro = document.getElementById("charIntro");
var charStand = document.getElementById("charStand");

var btnLeft = document.getElementById("btn-left");
var btnRight = document.getElementById("btn-right");
var charNum = 41;

var charInformation = document.getElementById("charInfor");

var index = parseInt(localStorage.getItem('charIndex'));
if (Number.isNaN(index)) {
    localStorage.setItem('charIndex', '0');
    index = 0;
}

//#region 角色信息
const nameCN01 = "博丽灵梦";
const nameEN01 = "HJakurei Reimu";
const title01 = "乐园的巫女";
const intro01 = "博丽灵梦是位于幻想乡内的神社——博丽神社的现任巫女。她平日居住在博丽神社中，在有工作或异变发生时也会出现在幻想乡内的各个地方乃至幻想乡外的世界中。作为博丽巫女，她以解决异变为主要工作内容，以降伏妖怪等敌人为主。此外，她拥有丰富的与妖怪相关的知识，作为这方面的专家，她也会帮助解决一些与妖怪相关的问题。而非像普通的巫女一样单纯地侍奉神明或经营神社。由于博丽神社所在的位置，距离幻想乡内人类的聚集地人类村落比较远，加上路途中有着险恶的兽道和上坡路，因此参拜客不多。灵梦经常会想出各种手段以吸引参拜客，但是常常以失败告终。尽管解决异变本身会为灵梦带来收入，但是由于缺乏香火钱，以及灵梦本身的贪财，在二次创作中普遍将灵梦设置为贫穷并且为了钱财不择手段的形象。但她的贪财并非沾染俗气，而是她单纯、忠于欲望的表现。虽然她是神道教的巫女，但是她的能力与技能，则主要以中国的道教的形式展现。";

const nameCN02 = "雾雨魔理沙";
const nameEN02 = "Kirisame Marisa";
const title02 = "普通的魔法使";
const intro02 = "雾雨魔理沙经营着位于魔法森林内的万事屋“雾雨魔法店”，她的家雾雨邸就是店铺。她平日居住在雾雨邸中，在有工作或异变发生时也会出现在幻想乡内的各个地方乃至幻想乡外的世界中。由于魔法店的位置，找到这家店十分困难。作为魔法使，她擅长于光和热的魔法，将魔法运用到人类很少能达到的地步。她喜欢使用华丽的、威力大的魔法，纯粹地追求效果的破坏力，却不愿被别人看到她努力的样子。她对于降妖除魔十分在行，特别是符卡规则成立后，她华丽的魔法就能发挥至极点。平日里埋头于魔法研究，或者出入博丽神社。有收集癖，且在年年加重。经常小偷小摸。她会使用魔法之帚、迷你八卦炉、自制魔导书等等道具，喜欢使用外表华丽的道具。";

const nameCN03 = "帕秋莉·诺蕾姬";
const nameEN03 = "Patchouli Knowledge";
const title03 = "不动的大图书馆";
const intro03 = "帕秋莉居住在红魔馆大图书馆中，深居简出。她的绝大部分时间用于读书，和开发新的魔法。同时，她也会撰写魔导书，用以记录创造的魔法。图书馆里的藏书，一部分是魔导书（包括她所撰写的），也有一部分是来自外界的各式各样的书。这些魔导书中，有一部分可以行动起来并发射弹幕。帕秋莉拥有丰富的知识，会为红魔馆制造物品（大多是现实中难以直接获得的物品，如火箭）。她偶尔会亲自外出调查异变。在外出前，她往往会预先翻阅书籍来做好充足准备。另外，同蕾米莉亚一样，帕秋莉以红茶作为日常饮品。";

const nameCN04 = "蕾米莉亚·斯卡蕾特";
const nameEN04 = "Remilia Scarlet";
const title04 = "永远鲜红的幼月";
const intro04 = "蕾米莉亚居住在红魔馆中。作为吸血鬼，她一般在夜晚活动，散步、赏花或者开宴会。而在白天，她一般会睡觉，但偶尔会打着阳伞出门。她讨厌雨天和晴天，这样的天气会阻碍她的出行。她害怕日光，无法渡过流淌着的水。她喜欢喝红茶，讨厌大蒜，沙丁鱼头之类，不过不怕十字架。接触炒豆会有被火烧的感觉。她似乎不吃幻想乡的人类。她不太喜欢味噌。她喜欢谈论残忍血腥的东西。她以观看别人对自家门卫红美铃发起的挑战赛为乐。";

const nameCN05 = "十六夜咲夜";
const nameEN05 = "Izayoi Sakuya";
const title05 = "完美潇洒的从者";
const intro05 = "身为女仆长，她大部分时间都待在红魔馆中，负责红魔馆内的扫除、料理、警卫、人员管理等工作，偶尔会外出进行采购。为了完成各种工作以及满足蕾米莉亚的任性需求，她常常于幻想乡中奔波，几乎全年无休并且没有工资。但她本人对此却没有任何不满等阴暗的情绪，甚至会配合蕾米莉亚的消遣。凭借自己优秀的个人素质，以及操纵时间的能力，她总是能完美地完成所有工作。身为人类，却比蕾米莉亚更像是红魔馆的代言人。至于为什么咲夜会在恶魔栖息的红魔馆里工作、以及她之前是什么样的人，全都不得而知。有一种说法称，她也许原本是外面世界或是其他世界的吸血鬼猎人，追赶着吸血鬼来到了红魔馆，却反被击败。此外，虽然还有其他的诸如人造人说、丧尸说、月人说、单纯只是怪人说等各种各样的说法，但是其中最有说服力的还是吸血鬼猎人说。";

const nameCN06 = "芙兰朵露·斯卡蕾特";
const nameEN06 = "Flandre Scarlet";
const title06 = "恶魔之妹";
const intro06 = "芙兰朵露生活在红魔馆的地下室里，极少外出红魔馆。虽然红魔馆的其他人因为芙兰拥有危险的能力和精神有些问题。而限制她离开红魔馆，但真正的原因其实芙兰自己不想离开红魔馆。";

const nameCN07 = "魂魄妖梦";
const nameEN07 = "Konpaku Youmu";
const title07 = "半人半灵的庭师";
const intro07 = "作为白玉楼的园艺师，她大多数时间位于冥界，主要负责庭院的巡逻和修剪工作，有时也会外出购物或处理冥界事务。业余时间则会在白玉楼修行剑术。因为白玉楼的庭院十分广阔，并且栽种着大量的樱花，她每日的工作十分繁重。本来还应肩负着指导幽幽子剑术的工作，但似乎并没有在做。另外，由于幽幽子表现出的吃货属性，在二次创作中也常常有着妖梦作为白玉楼厨师负责幽幽子餐食的设定。";

const nameCN08 = "西行寺幽幽子";
const nameEN08 = "Saigyouji Yuyuko";
const title08 = "华胥的亡灵";
const intro08 = "她是亡灵公主，西行寺家的大小姐，负责管理冥界的幽灵。她性格开朗，而且给人呆呆的感觉，十分慢性子，任性妄为。她行事轻浮，整天游手好闲，看不出所想的事情，总是做出让人很困扰的行动，却是一个真心爱着幻想乡之外的这个国家的爱国者。她喜欢装傻，常说些不知道是装傻还是有着深思熟虑的话，而且难以理解其中真意。已经以亡灵的姿态存世千年以上，也将永远居住在冥界的白玉楼中。受阎魔之命，管理着冥界的幽灵。";

const nameCN09 = "小野塚小町";
const nameEN09 = "Onozuka Komachi";
const title09 = "三途川的引渡人";
const intro09 = "居住在地狱。担任三途河的摆渡人一职，负责把渡河的方法告诉死者们。多数时候她专门负责引渡幻想乡中人类的灵魂，在过程中总是单方面地向幽灵搭话。河面的宽度，由死神引渡前收取的摆渡钱的多寡决定，钱越多，距离越短。此外，根据她心情的变化，河的宽度和深度也会发生相应的变化。摆渡钱指的是在人间衷心悼念死者的人的财产总和。万一某名死者的所拥有的财产总数为负值，则渡船不会将其送抵彼岸，途中该名死者就会从渡船中被扔进河里。不舍得拿出全部的“钱”的话，也会被她扔到河里。经常在幻想乡中四处偷懒摸鱼，而且看上去也不怎么惭愧。";

const nameCN10 = "四季映姬·亚玛萨那度";
const nameEN10 = "Shikieiki Yamaxanadu";
const title10 = "乐园的最高裁判长";
const intro10 = "四季映姬曾经是地藏，后来全国各地的地藏联名上书请求分担阎魔大人的工作，她也成为了阎魔。四季映姬自身拥有一套完整且非常复杂的标准来判断是非黑白，涵盖从事件原委到关联之人的经历等等内容，其中尤其注重他人的行为是否符合自身的身份，做出与自身身份不符的行为被认为是罪孽深重的。性格上非常认真且较真，总认为自己对他人的说教是正确的。八云紫和西行寺幽幽子曾在无缘塚赏花之时，因为察觉到四季映姬要过来，提前从现场溜走。妖怪们并不想在四季映姬在的地方逗留。";

const nameCN11 = "藤原妹红";
const nameEN11 = "Huziwara no Mokou";
const title11 = "蓬莱人的外形";
const intro11 = "她原是贵族家的女儿，因服用蓬莱山辉夜留下的蓬莱之药而成为不老不死的蓬莱人。在再次遇到辉夜后开始了与她无尽的厮杀日常。会护送在迷途竹林迷路的人回到人类村落。如果拜托她担任在迷途竹林的护卫一定会答应，并喜欢听拜托者讲家族的事，但自己沉默寡言。不会迷路的原因是和竹林里的妖精混得很熟。这样做的原因仅仅是不愿意看到迷路之人的尸骨。从得到的感谢中获得生存下去的动力。居住在隐藏于迷途竹林的小家中。从约四百年前开始，与蓬莱山辉夜厮杀成为日常，在相互死斗中找到乐趣。会到永远亭里赏月，但在亭里不和里面的人玩。";

const nameCN12 = "上白泽慧音";
const nameEN12 = "Kamishirasawa Keine";
const title12 = "历史与知识的半兽";
const intro12 = "她是后天性的半白泽兽人，半兽半人的妖怪。她平时为人类形态，看见满月就会变身为白泽。某些方面有些固执且不近人情。尽管身为妖怪，却十分喜欢人类，因此站在人类一边，只为人类使用能力。平时居住在人类村落中。每天都在编纂历史，这也是她的职责。在117季，得知人类村落存在秘密历史结社后，开办了只招收人类的寺子屋。最初学校开办是为了讲授历史，慧音担任老师。由于内容难懂乏味而没有多少人去听课。忘记写慧音布置的作业会被头槌惩罚。过了一段时间后，寺子屋已经有不少学生，但是基本都是儿童。寺子屋似乎也聘请了其他老师，甚至有男老师。此外，来寺子屋的人中似乎还有学生的仆役。后来，也教授读写、算盘、地理、练字等，并聘请了稗田阿求当老师。很讨厌见面不问候的人类。在满月之夜，会在变身白泽后集中完成身为白泽的工作，并将积攒了一个月的工作一夜间一口气做完。";

const nameCN13 = "八意永琳";
const nameEN13 = "Eirin Yagokoro";
const title13 = "月之头脑";
const intro13 = "她是月人，曾是月之都的“月之头脑”。“八意永琳”只是她在地面上使用的名字。事实上，地球人无法读出永琳的真名。曾作为月之贤者之一居住在月之都中。现在居住在永远亭中，经营着名为“蓬莱药局”的药店。";

const nameCN14 = "蓬莱山辉夜";
const nameEN14 = "Houraisan Kaguya";
const title14 = "永远与须臾的罪人";
const intro14 = "她是月之公主，永远亭的主人，拥有操纵永远与须臾程度的能力。来到地面后，通过学习辉夜对地上的知识已经有一些了解，但是也有展示出不足的一面。在被流放到地上前曾居住在月之都，在杀死月之使者后的一千多年里隐居在迷途竹林内的永远亭中，如今不再隐居，过着普通的生活。每年都会举行一次月之都博览会“月都万象展”，展示各种关于月之都的物品和资料甚至月兔捣年糕表演。";

const nameCN15 = "莉莉卡·普莉兹姆利巴";
const nameEN15 = "Lyrica Prismriver";
const title15 = "骚灵键盘手";
const intro15 = "她是蕾拉·普莉兹姆利巴创造的骚灵，是吵闹、喜欢举办音乐会的灵体。她的性格在三姐妹之中最像人类，因而交谈也比较容易。但是，她也更狡猾世故，只想着用最小程度的气力去获得最大程度的利益。她精神又聪明，态度和行为都计算到了三步以后。生活在雾之湖附近的废弃洋馆中。在普莉兹姆利巴乐团解散前是普莉兹姆利巴乐团的一员，在乐团中负责演奏键盘和打击乐，常被邀请去妖怪们的聚会进行演出。普莉兹姆利巴乐团解散后加入堀莉兹姆莉巴乐团，负责键盘。平时教唆姐姐们而自己不去战斗。乐器是普莉兹姆利巴乐团中最有活力的。";

const nameCN16 = "梅露兰·普莉兹姆利巴";
const nameEN16 = "Merlin Prismriver";
const title16 = "骚灵小号手";
const intro16 = "她是蕾拉·普莉兹姆利巴创造的骚灵，是吵闹、喜欢举办音乐会的灵体。她从容开朗，不知道什么叫低落，甚至有点狂躁病的苗头。她偶尔也会说些令人无法理解的话。生活在雾之湖附近的废弃洋馆中。在普莉兹姆利巴乐团解散前是普莉兹姆利巴乐团的一员，在乐团中负责演奏小号，常被邀请去妖怪们的聚会进行演出。她在演出中往往处于中央位置，是演出中的亮点，最吸引人眼球。粉丝也有很多。普莉兹姆利巴乐团解散后加入堀莉兹姆莉巴乐团，仍负责小号。";

const nameCN17 = "露娜萨·普莉兹姆利巴";
const nameEN17 = "Lunasa Prismriver";
const title17 = "骚灵提琴手";
const intro17 = "她是蕾拉·普莉兹姆利巴创造的骚灵，是吵闹、喜欢举办音乐会的灵体。她冷静阴沉，话不多。同时，她性格坦率，按部就班地做事，因而容易被欺骗。生活在雾之湖附近的废弃洋馆中。在普莉兹姆利巴乐团解散前是普莉兹姆利巴乐团的一员，在乐团中负责演奏小提琴，常被邀请去妖怪们的聚会进行演出。普莉兹姆利巴乐团解散后加入堀莉兹姆莉巴乐团，仍负责小提琴。是做什么都很出色的优等生类型。不论对待什么事都不喜欢拐弯抹角，会堂堂正正地一决胜负。";

const nameCN18 = "橙";
const nameEN18 = "Chen";
const title18 = "凶兆的黑猫";
const intro18 = "她是妖怪八云蓝的式神，即八云紫式神的式神，做式神期间拥有使用妖术程度的能力。橙总是怕水，且对木天蓼无抵抗力。橙没有和自己的主人住在一起，而是在妖怪之山深处的迷途之家生活。迷途之家是一个被荒废了的小村落，如今被山里的野猫占据，形成了猫咪的村落，橙管理着这里。把猫咪们召集并管理起来的橙本意是找一个听从她指挥的部下，但是迷途之家却成为了猫咪的乐园。橙有事就会来人类村庄袭击人类，有时会在妖怪兽道行走。如果是式神状态，就会和蓝及紫一起行动。没有被式神附身的平时，有着和猫类似的习性，会和来人恶作剧，冬天会在被炉里蜷成球状。";

const nameCN19 = "八云蓝";
const nameEN19 = "Yakumo Ran";
const title19 = "九尾的式神";
const intro19 = "蓝是凭依在九尾妖狐上的式神，而这只妖狐则是另一个妖怪。这只妖狐有着强大的魔力，达到了妖兽的最高峰。虽然凭依着最强妖兽，她却性格温和，不会为了自己而争斗。她被八云紫用于负责各种杂事。同时，她也能使役包括橙在内的多个式神和创造新的式神。和八云紫同住在幻想乡艮之境的住所。作为紫的式神，常常代替紫在幻想乡行动，负责各种杂事和完成紫的命令。紫把一切杂事都交给她。日子过得苦不堪言。被式神凭依时，狐狸本身的意志绝不会表露半分。非常喜欢油炸豆腐，会去人类村落里买油炸豆腐。";

const nameCN20 = "因幡帝";
const nameEN20 = "Tewi Inaba";
const title20 = "幸运的白兔";
const intro20 = "她是迷途竹林中野生的兔子与妖怪兔的领袖，自己也是妖怪兔。地上的兔子对她唯命是从，且只听她的命令。她认识所有的妖怪兔。她因为注重健康而很长寿，据说是幻想乡中活得最久的妖怪一类。她性格冲动，非常喜欢恶作剧却胆子很小，喜怒哀乐的情感相当强烈。可见，天为的性格比起妖怪更像妖精。同时，她生性就是个欺诈师。虽然每次骗人都会遭到报复，但完全没有悔过之意。她相当奸诈狡猾。自从迷途而进入永远亭[儚月抄]后，一直居住在永远亭，但经常擅自离开永远亭。在迷途竹林里不会迷路，因为她看得见竹子下方气流的流向。";

const nameCN21 = "铃仙·优昙华院·因幡";
const nameEN21 = "Reisen Udongein Inaba";
const title21 = "疯狂的月兔";
const intro21 = "铃仙曾是月之都中绵月家的月兔，在四十年前人类侵略月球的月面战争开始前夕舍弃同胞，从月球逃走。在大约三十年前逃到幻想乡，被蓬莱山辉夜收养。现在在永远亭过着安稳的生活，但心中仍然抱着抛弃同伴独自逃生的罪恶感。她的性格疯狂与悠闲并存，绝算不上温柔。她偶尔会表现出悠闲的一面，但战斗时和日常时的性格截然不同。她自信较少，很少配合人类，完全是自顾自的改变自己的性格。她的性格比较胆小随便，合作能力差。作为蓬莱山辉夜的宠物居住在永远亭里，过着安稳的生活。能对因幡帝下命令，被阿求认为是真正的兔子们的领袖。但是地上的兔子们只听帝的命令，铃仙不能直接指挥兔子，帝也基本不听她的话。有时会伪装成药贩到人类村落卖药和维护村民们的药箱。卖完药后就会像避开人类似的消失在迷途竹林里。";

const nameCN22 = "犬走椛";
const nameEN22 = "Inubashiri Momizi";
const title22 = "山中的千里眼";
const intro22 = "她是在妖怪之山中负责巡逻和警戒的白狼天狗之一，性格协调性高，执行任务忠实。不能出山，只能在山上做些低端基本的工作，例如没有意义的巡回和给地位高的天狗当保镖。平日在九天瀑布内侧待机。因为妖怪之山入侵者很少，所以平时都很闲，于是会找附近同样闲的河童下大将棋。";

const nameCN23 = "东风谷早苗";
const nameEN23 = "Kochiya Sanae";
const title23 = "祭祀风的人类";
const intro23 = "她是从外部世界来的人类，是守矢神社的巫女与现人神。作为外面世界来的人类，有点笨笨的，感觉也和幻想乡的人类有点差异，又有现代女孩奔放活泼的一面。早苗是妖怪之山上守矢神社的风祝，负责去山麓的人类村落传教收集信仰。在八坂神奈子命令下，开始去降伏妖怪，从一开始的没有经验、不习惯渐渐变得习惯起来。为了融入幻想乡的生活，早苗很快从一本正经变得不知常识为何物。";

const nameCN24 = "键山雏";
const nameEN24 = "Kagiyama Hina";
const title24 = "秘神流雏";
const intro24 = "她是厄神，疫病神的一种，实际上不是普通的神明而是一种妖怪。因为能力的原因，提起她的名字会变得不幸。她的性格十分开朗且平易近人，尽管是一种疫病神，却待人友好，对人类完全没有恶意。她为了厄运不再回到人类，通过回收顺流而下的雏人偶，收集并看守着厄运，最终将其交诸众神[风神录]。与人类的接触很少。会将回收的雏人偶反卖给人类村落。不过，她认为传统的豪华的雏人偶很荒谬，因此也在制作并售卖一次性的速成雏人偶。";

const nameCN25 = "八坂神奈子";
const nameEN25 = "Yasaka Kanako";
const title25 = "山坂与湖水的化身";
const intro25 = "神奈子原本是外面世界的大和神、大国主的儿子“建御名方神”，是属于土著神的国津神。现在她是守矢神社供奉的神之一，是蛇神和战神，实际上又是风雨之神，现在也是山之神明，还被当作农业之神祭祀，并打算慢慢转型为技术革新之神。她的性格非常专横并且以自我为中心，而看起来十分可靠。她大大咧咧的，有着爽快的性格，因此与魔理沙相当地合得来。居住在守矢神社，是守矢神社的“销售部”，主管对外交涉。然而，神奈子真正的住所不是在神社而是整个山。管理着核聚变炉，若其运行出现异常会前往调查。";

const nameCN26 = "洩矢诹访子";
const nameEN26 = "Moriya Suwako";
const title26 = "土著神的顶点";
const intro26 = "她原本是生活在外界的土著神，是八百万神之一，在遥远的古代作为神和王建立了洩矢之国。后来诹访子在被八坂神奈子击败后让出王国，但实际上一直支配着王国。她现在是守矢神社供奉的神之一，也是山神和住在山里的各种各样的神明的领导者。她的性格初看好像很温厚，总是装出一副呆呆的样子。但是无法看透在想什么，真实性格或许很坏。她还有些任性妄为，多次不告诉神奈子与早苗擅自进行自己的计划。诹访子居住在守矢神社，不怎么离开神社。平时以人形态示人，祭祀请神之时，则常以青蛙的面貌出现。";

const nameCN27 = "八云紫";
const nameEN27 = "Yakumo Yukari";
const title27 = "神隐的主犯";
const intro27 = "她是曾参与创立幻想乡的妖怪贤者之一，一直以来暗中维护着幻想乡的安全与稳定。她性格不近人情而无法理解，绝对不是好东西，行为原理与人类完全相异。然而，她真挚地对待幻想乡、爱着幻想乡。紫大部分时间都在幻想乡艮之境的住所中睡觉。她自称一天要睡12个小时，只在夜间活动，冬天还要冬眠。在她睡觉期间，由式神八云蓝作为她的耳目，替她处理事务。即使在冬眠期间，在遇到突发情况的时候她也会前去处理。极为神出鬼没。";

const nameCN28 = "比那名居天子";
const nameEN28 = "Hinanawi Tenshi";
const title28 = "绯想绯绯想天之女";
const intro28 = "她本是比那名居家的大小姐，随家族成为天人，因此不具备天人应有的品行，性格也与其他天人不同，因此被称为“不良天人”。她的性格是温室娇女、任意妄为、自鸣得意，有着缺乏教养的任性脾气。因此，只有捧着顺其心意才能让她好好听话。同时，她天性贪玩，因而羡慕幻想乡里人类与妖怪的生活。在完全凭依异变前不久，因为偷吃天界宴会上的丹药被放逐到地面上。";

const nameCN29 = "永江衣玖";
const nameEN29 = "Nagae Iku";
const title29 = "美丽的绯之衣";
const intro29 = "她是被称作龙之代言人的龙宫使者，负责将龙神说出的重要的信息和地震的预兆透露给人类和妖怪。性格悠然自得，对他人行动毫无兴趣。怕麻烦而不会做主角，更多地观察他人的行动。生活在龙的世界与人类的世界之间，也就是云中，居住在雷云之中，大部分时间在云中悠游度日，并关注着龙神的一举一动。只有当听到龙神说到重要的内容时才会透露给人类和妖怪。此外，也负责预报地震和天气。";

const nameCN30 = "射命丸文";
const nameEN30 = "Syameimaru Aya";
const title30 = "传统的幻想书屋";
const intro30 = "她是居住在妖怪之山上的鸦天狗，拥有操纵风程度的能力，力量十分强大，另外移动速度也很快，有着幻想乡最高的速度。她头脑聪颖，人前显得谨慎认真，战斗和交涉时往往游刃有余。加之强大的力量以及小报记者的身份，在幻想乡中并不招人喜欢。射命丸文主要活动于妖怪之山[史纪]，是一名天狗新闻记者。不过也会在幻想乡各处奔走。作为新闻记者，工作主要是记录各种有趣的事件。多次出场都是为了新闻取材。喜欢小道消息，总是购买信息，和天狗们交换情报新闻以八卦和谎言为主。她收集题材而写成的报纸《文文。新闻》主要记录幻想乡的女孩子们所发生的不可思议的事件。新闻不定期发行，多数一个月发行五回，每回记录的事情都很少。更像是幻想乡的妖怪和人们在无聊的午后，手端红茶，用来打发时间的东西。报纸的取材和阅读群体都来自于妖怪和比妖怪更像妖怪的人类。从铃奈庵第33话开始，在人类村落发行面向人类的报纸“文文。新闻人类村落版”，由铃奈庵代售。文花帖是将能成为新闻记事的题材记录起来的天狗的笔记本。里面混杂了各种相片和手写文字。文总是把一只乌鸦带在身边当作自己的道具。";

const nameCN31 = "伊吹萃香";
const nameEN31 = "Ibuki Suika";
const title31 = "小小的百鬼夜行";
const intro31 = "她是在鬼族于幻想乡消失很长一段时间后，再次出现的鬼。性格很开朗且喜欢酒。天真而且非常单纯。和一大群人在一起，会使气氛变得很快活，而只有两个人在一起，长时间的话会逐渐变烦。或者说非常孩子气。不怎么说谎，但相比其他鬼族不太诚实。非常喜欢热闹，总是找别人开宴会。虽然醉醺醺的，但很直率。会设套诓人。曾经居住在地底，目前定居在幻想乡，但居所不明，行踪不定。其住处常被称作“鬼所居住之国”。日常生活行迹未知，但遇到某些事态会进行调查。曾经伪装成摊贩与茨木华扇接触。虽然是鬼族的一员、山之四天王之一，但现在萃香并不会捉走人类，而是更喜欢找人类、妖怪开宴会。认为即使自己想捉走人类，也不可能去人类村落自讨苦吃。整日都在喝酒，随身携带着名为伊吹瓢的酒葫芦。一般情况下都是醉醺醺的。伊吹瓢中的酒水似乎能给鬼之外的种族造成幻觉甚至影响记忆。力气非常大。曾经打碎过倒映月亮的天穹，放出过能凭一己之力毁掉妖怪之山的豪言壮语。对自己的力量很有自信。她会参与博丽神社的宴会，也会去人类村落。";

const nameCN32 = "爱丽丝·玛格特洛依德";
const nameEN32 = "Alice Margatroid";
const title32 = "七色的人偶师";
const intro32 = "爱丽丝对他人冷淡，基本上不拘束于事物，性格上不固执不厌恶，喜欢一个人独处。但是也不是就像人们见到的那样，她也常常参加宴会，在祭典上表演人偶剧。看上去像个大人，非常好战，和她挑起胜负的话会立刻欣然接受，但是爱丽丝不喜欢以压倒的力量战胜对方，所以总是用比对手稍微高一点的力量战斗。爱丽丝往往不以全力进行战斗，属于见好就收的类型，因为全力战斗过后就没有退路了。这一点和灵梦很像，也就是很重视保留实力。因为是人偶师，所使用的人偶都是自己制作的，并且看上去人偶就像自动人偶一样（实际上是爱丽丝幕后操控的）。人偶还有可能存在爆炸的风险。平时独居在魔法森林的玛格特洛依德邸，爱丽丝喜欢一个人在家制作各种人偶，所以不怎么爱出门，但是她也会去祭典上表演人偶技艺。平时家中的打扫都是人偶完成，但实际上都是她在使用操控术进行操控人偶完成的。曾经邀请三月精来家里做客。";

const nameCN33 = "河城荷取";
const nameEN33 = "Kawasiro Nitori";
const title33 = "河童重工";
const intro33 = "作为河童中的一员，她手艺精巧，擅长制作道具，是个刻板印象里的技工。她会突然改变态度和语气，有着奇怪的性格。她很怕生，有着胆小的一面，独处时如果有人类或者其他妖怪靠近就会立即逃跑。然而，她又热衷于赚钱，守财如命。她面对高级种族的时候态度会很谦逊，但并不会因此而服从或受其支配。和整个河童群体一起居住于妖怪之山上的玄武涧中。作为河童，对商业机遇很敏感，每当幻想乡内举办稍具规模的节庆活动或是集会，时常能在现场看见包括她在内的河童们出摊叫卖。";

const nameCN34 = "风见幽香";
const nameEN34 = "Kazami Yuka";
const title34 = "四季的鲜花之主";
const intro34 = "幽香生活在太阳花田，会消灭一切闯入打扰的人类和妖怪。由于活得久，最近很少离开花田周围活动。非常喜欢季节性开放的花朵，一年四季都生活在被自然的花包围的场所，以一年内所有时间都有花开放为目标而努力。非常喜欢折磨人的精神，但作为强大的妖怪，对同样拥有强大力量的妖怪或者拥有特别能力的人类”以外的人不感兴趣，并且通常平时表现得很绅士。";

const nameCN35 = "星熊勇仪";
const nameEN35 = "Hoshiguma Yugi";
const title35 = "为人所谈论的怪力乱神";
const intro35 = "她是典型的鬼，有着刚毅且干脆利落的性格。生活在旧地狱的旧都中，很喜欢以实力说话的旧地狱。每天都一边嬉闹一边喝酒，快乐地享受着生活。是旧地狱温泉街的总管。喜欢力气大、有勇气以及正直的人们，相反饶不过那些懦弱的、胆小的、狡猾的人们。会找喜欢的人去喝酒、比腕力。";

const nameCN36 = "古明地觉";
const nameEN36 = "Komeiji Satori";
const title36 = "连怨灵都恐惧的少女";
const intro36 = "她拥有读心的能力，可以轻松读出别人心中所想乃至他们的记忆。但她也因此成为旧地狱里最被惧怕，最被讨厌的妖怪，连怨灵都对她避之不及。利用这一点，她被委任管理旧地狱-灼热地狱遗址的怨灵，并居住在遗迹上方的别墅地灵殿中，过着自我封闭的生活。然而觉本人却是一个和蔼、老实、有些内向的妖怪。她有很多宠物——读心的能力让她可以和动物们交流，她也很受动物们的欢迎。但她本人却担心动物们会惧怕她。她有一个同为觉妖怪却不具备读心能力的妹妹——古明地恋。古明地觉长期居住在地灵殿中，作为被畏惧与厌恶存在过着自我隔离的生活。基本不会有人拜访她，她也几乎不主动出门。因为她的妹妹终日在外游荡，她偶尔会到地面上寻找妹妹。平日在家看书写书，尤其是喜欢带有丰富心理描写的故事。至于各种日常杂务乃至管理灼热地狱遗址的工作，那些都被她交给了宠物们。另外，她也会作为侦探出面调查旧地狱的各种事件。";

const nameCN37 = "古明地恋";
const nameEN37 = "Komeiji Koishi";
const title37 = "紧闭的恋之瞳";
const intro37 = "古明地恋是居住于旧地狱里地灵殿中的，种族为“觉”的妖怪，是古明地觉的妹妹。觉妖怪是拥有读心能力的妖怪，然而恋在察觉到读心的能力会为身边人所厌恶后，主动封闭了自己的内心，从而失去了读心能力，但同时获得了操纵无意识的能力，并可以在无意识下行动。这使得看到她的人感觉不到她的存在，过后也会立刻忘掉，就像她的名字谐音“小石头”2那样。古明地恋平日里居住在旧地狱的地灵殿中，不过她也会时不时造访地上，溜溜达达地在地上各处都有出现。恋一直处于无意识的状态，以至于她本人也不知道接下来她自己会做什么，所以她更多地是在顺从现场气氛行事。她无心无欲地顺从着周遭的环境生活着，就像随风飘舞的布片一般。对于她自己而言这种生活也算是有趣，但周遭看来这样的她稍微有一点可怜。同时，别人也几乎不会意识到她的存在，这使得她可以四处游荡。甚至是不受阻拦地穿过守卫森严的天狗领地。古明地恋虽然会使用与梦境有关的符卡，但是她本人却是不做梦的，心灵非常的空洞。恋的姐姐古明地觉给她分配了几只宠物，恋有时会和宠物们一同玩耍。不过她和她的姐姐不同，并不讨动物喜欢，但也不被讨厌。经历过饲养宠物，以及和地上人类相遇等事件后，原本心境空空如也的恋逐渐有了一些变化。她会开始在意大家有没有无视她，尝试着和地上的其他人进行接触，能够和其他人组队调查异变等等。";

const nameCN38 = "琪露诺";
const nameEN38 = "Cirno";
const title38 = "冰之妖精";
const intro38 = "她是一只冰之妖精，也是个笨蛋，和其他妖精一样天真，喜欢恶作剧。从不考虑自己的力量就去恶作剧，因而每次都会吃苦头。对于全部妖精来说，无论吃多少苦头也不会反省一点,下次就继续恶作剧了。平时以雾之湖作为根据地。她是湖附近妖精们中的领袖般的存在，力量也比其他妖精强。她是属于好战型的，所以必须留神。但是还是比较弱甚至“和杂鱼没什么区别”的角色。喜欢玩一种把青蛙冻住后放到水里解冻的恶作剧游戏。「如果青蛙在一瞬间被彻底冻住，它们不会死掉，而是在解冻的同时和正常一样活过来。这不是游戏，是结冰的修行。我这样做既不是因为冻青蛙很可爱，也不是它们的叫声太烦人，或是玩冻青蛙很有趣、因为它们可能会碎掉的缘故。」但是每玩三次大概就会有一次失败，青蛙就会悲惨地支离破碎。";

const nameCN39 = "红美铃";
const nameEN39 = "Hoan Meirin";
const title39 = "华人小姑娘";
const intro39 = "她被设定为中国风的武术家——身穿中国风的服装以及使用中国武术。虽然她的种族为妖怪，但她的外表和谈吐与人类没有任何区别。性格开朗率直，有些热血。偶尔会偷懒和发牢骚。红美铃在红魔馆担任门卫一职。红魔馆很少接待客人，所以她经常会阻拦不速之客。同时她也负责管理红魔馆的花坛，被认为是花坛的看护人。看门时，她会打太极拳、睡觉或看热血漫画。因为她由红魔馆提供饮食，所以不会主动袭击人类。不仅如此，因为职务关系，她和人类接触率很高。经常有人和她搭话。来拜访的人有时会向她发起挑战，测试自己的身手。";


const nameCN40 = "秋静叶";
const nameEN40 = "Aki Sizuha";
const title40 = "寂寞与终焉的象征";
const intro40 = "她是掌管幻想乡秋天的八百万神之一，掌管着红叶，是红叶之神。作为寂寞与终焉的象征，性格比较悲观，总是发愁年末马上就要到来。在秋天会使幻想乡的落叶阔叶林变为红色，再踹树使红叶落下。在秋天之外则无所事事。不擅长战斗，但是仍会惩罚妨碍秋天的人。生气时脸会变得通红。";


const nameCN41 = "秋穰子";
const nameEN41 = "Aki Minoriko";
const title41 = "丰收与成熟的象征";
const intro41 = "她是掌管幻想乡秋天的八百万神之一，掌管着丰收，是丰收之神。作为丰裕与收成的象征，性格比较朴素开朗，没什么神的威严。擅长烤番薯，通过花长时间加热，来增加甜味，因此烤的番薯十分美味。身上有烤半熟红薯的香味，因为她把红薯当成香水。因为掌管着谷物与果实的收成，受到人们的爱戴，而每年都会被人类邀请参加收获祭以表达感谢之意。如果收获前不邀请她就不能保证丰收。因为得到的都是个人性质的信仰而工作量少，不过她反而为此高兴。遇到蔑视或者排斥她的人，仍会教训他。中意于自然务农法，刻意避免过度除草整地的行为，因此敌视反此道而行的农户。在冬天会变得没精神。";

//#endregion


//#region 字体大小适配
function AdjustFontSizeCN(string) {
    var length = string.length;
    if (length > 5) {
        charNameCN.style.fontSize = (60 - (length - 5) * 5).toString() + "px";
    }
}

function AdjustFontSizeEN(string) {
    var length = string.length;
    if (length > 19) {
        charNameEN.style.fontSize = (50 - (length - 19) * 2).toString() + "px";
    }
}
//#endregion

switch (index) {
    case 0:
        charNameCN.innerHTML = nameCN01;
        charNameEN.innerHTML = nameEN01;
        charTitle.innerHTML = title01;
        charIntro.innerHTML = intro01;
        charStand.src = './Img/立绘/博丽灵梦.png';
        break;
    case 1:
        charNameCN.innerHTML = nameCN02;
        charNameEN.innerHTML = nameEN02;
        charTitle.innerHTML = title02;
        charIntro.innerHTML = intro02;
        charStand.src = './Img/立绘/雾雨魔理沙.png';
        break;
    case 2:
        charNameCN.innerHTML = nameCN03;
        charNameEN.innerHTML = nameEN03;
        charTitle.innerHTML = title03;
        charIntro.innerHTML = intro03;
        charStand.src = './Img/立绘/帕秋莉·诺蕾姬.png';
        break;
    case 3:
        charNameCN.innerHTML = nameCN04;
        charNameEN.innerHTML = nameEN04;
        charTitle.innerHTML = title04;
        charIntro.innerHTML = intro04;
        charStand.src = './Img/立绘/蕾米莉亚·斯卡蕾特.png';
        break;
    case 4:
        charNameCN.innerHTML = nameCN05;
        charNameEN.innerHTML = nameEN05;
        charTitle.innerHTML = title05;
        charIntro.innerHTML = intro05;
        charStand.src = './Img/立绘/十六夜咲夜.png';
        break;
    case 5:
        charNameCN.innerHTML = nameCN06;
        charNameEN.innerHTML = nameEN06;
        charTitle.innerHTML = title06;
        charIntro.innerHTML = intro06;
        charStand.src = './Img/立绘/芙兰朵露·斯卡蕾特.png';
        break;
    case 6:
        charNameCN.innerHTML = nameCN07;
        charNameEN.innerHTML = nameEN07;
        charTitle.innerHTML = title07;
        charIntro.innerHTML = intro07;
        charStand.src = './Img/立绘/魂魄妖梦.png';
        break;
    case 7:
        charNameCN.innerHTML = nameCN08;
        charNameEN.innerHTML = nameEN08;
        charTitle.innerHTML = title08;
        charIntro.innerHTML = intro08;
        charStand.src = './Img/立绘/西行寺幽幽子.png';
        break;
    case 8:
        charNameCN.innerHTML = nameCN09;
        charNameEN.innerHTML = nameEN09;
        charTitle.innerHTML = title09;
        charIntro.innerHTML = intro09;
        charStand.src = './Img/立绘/小野塚小町.png';
        break;
    case 9:
        charNameCN.innerHTML = nameCN10;
        charNameEN.innerHTML = nameEN10;
        charTitle.innerHTML = title10;
        charIntro.innerHTML = intro10;
        charStand.src = './Img/立绘/四季映姬.png';
        break;
    case 10:
        charNameCN.innerHTML = nameCN11;
        charNameEN.innerHTML = nameEN11;
        charTitle.innerHTML = title11;
        charIntro.innerHTML = intro11;
        charStand.src = './Img/立绘/藤原妹红.png';
        break;
    case 11:
        charNameCN.innerHTML = nameCN12;
        charNameEN.innerHTML = nameEN12;
        charTitle.innerHTML = title12;
        charIntro.innerHTML = intro12;
        charStand.src = './Img/立绘/上白泽慧音.png';
        break;
    case 12:
        charNameCN.innerHTML = nameCN13;
        charNameEN.innerHTML = nameEN13;
        charTitle.innerHTML = title13;
        charIntro.innerHTML = intro13;
        charStand.src = './Img/立绘/八意永琳.png';
        break;
    case 13:
        charNameCN.innerHTML = nameCN14;
        charNameEN.innerHTML = nameEN14;
        charTitle.innerHTML = title14;
        charIntro.innerHTML = intro14;
        charStand.src = './Img/立绘/蓬莱山辉夜.png';
        break;
    case 14:
        charNameCN.innerHTML = nameCN15;
        charNameEN.innerHTML = nameEN15;
        charTitle.innerHTML = title15;
        charIntro.innerHTML = intro15;
        charStand.src = './Img/立绘/莉莉卡·普莉兹姆利巴.png';
        break;
    case 15:
        charNameCN.innerHTML = nameCN16;
        charNameEN.innerHTML = nameEN16;
        charTitle.innerHTML = title16;
        charIntro.innerHTML = intro16;
        charStand.src = './Img/立绘/梅露兰·普莉兹姆利巴.png';
        break;
    case 16:
        charNameCN.innerHTML = nameCN17;
        charNameEN.innerHTML = nameEN17;
        charTitle.innerHTML = title17;
        charIntro.innerHTML = intro17;
        charStand.src = './Img/立绘/露娜萨·普莉兹姆利巴.png';
        break;
    case 17:
        charNameCN.innerHTML = nameCN18;
        charNameEN.innerHTML = nameEN18;
        charTitle.innerHTML = title18;
        charIntro.innerHTML = intro18;
        charStand.src = './Img/立绘/橙.png';
        break;
    case 18:
        charNameCN.innerHTML = nameCN19;
        charNameEN.innerHTML = nameEN19;
        charTitle.innerHTML = title19;
        charIntro.innerHTML = intro19;
        charStand.src = './Img/立绘/八云蓝.png';
        break;
    case 19:
        charNameCN.innerHTML = nameCN20;
        charNameEN.innerHTML = nameEN20;
        charTitle.innerHTML = title20;
        charIntro.innerHTML = intro20;
        charStand.src = './Img/立绘/因幡帝.png';
        break;
    case 20:
        charNameCN.innerHTML = nameCN21;
        charNameEN.innerHTML = nameEN21;
        charTitle.innerHTML = title21;
        charIntro.innerHTML = intro21;
        charStand.src = './Img/立绘/铃仙·优昙华院·因幡.png';
        break;
    case 21:
        charNameCN.innerHTML = nameCN22;
        charNameEN.innerHTML = nameEN22;
        charTitle.innerHTML = title22;
        charIntro.innerHTML = intro22;
        charStand.src = './Img/立绘/犬走椛.png';
        break;
    case 22:
        charNameCN.innerHTML = nameCN23;
        charNameEN.innerHTML = nameEN23;
        charTitle.innerHTML = title23;
        charIntro.innerHTML = intro23;
        charStand.src = './Img/立绘/东风谷早苗.png';
        break;
    case 23:
        charNameCN.innerHTML = nameCN24;
        charNameEN.innerHTML = nameEN24;
        charTitle.innerHTML = title24;
        charIntro.innerHTML = intro24;
        charStand.src = './Img/立绘/键山雏.png';
        break;
    case 24:
        charNameCN.innerHTML = nameCN25;
        charNameEN.innerHTML = nameEN25;
        charTitle.innerHTML = title25;
        charIntro.innerHTML = intro25;
        charStand.src = './Img/立绘/八坂神奈子.png';
        break;
    case 25:
        charNameCN.innerHTML = nameCN26;
        charNameEN.innerHTML = nameEN26;
        charTitle.innerHTML = title26;
        charIntro.innerHTML = intro26;
        charStand.src = './Img/立绘/洩矢诹访子.png';
        break;
    case 26:
        charNameCN.innerHTML = nameCN27;
        charNameEN.innerHTML = nameEN27;
        charTitle.innerHTML = title27;
        charIntro.innerHTML = intro27;
        charStand.src = './Img/立绘/八云紫.png';
        break;
    case 27:
        charNameCN.innerHTML = nameCN28;
        charNameEN.innerHTML = nameEN28;
        charTitle.innerHTML = title28;
        charIntro.innerHTML = intro28;
        charStand.src = './Img/立绘/比那名居天子.png';
        break;
    case 28:
        charNameCN.innerHTML = nameCN29;
        charNameEN.innerHTML = nameEN29;
        charTitle.innerHTML = title29;
        charIntro.innerHTML = intro29;
        charStand.src = './Img/立绘/永江衣玖.png';
        break;
    case 29:
        charNameCN.innerHTML = nameCN30;
        charNameEN.innerHTML = nameEN30;
        charTitle.innerHTML = title30;
        charIntro.innerHTML = intro30;
        charStand.src = './Img/立绘/射命丸文.png';
        break;
    case 30:
        charNameCN.innerHTML = nameCN31;
        charNameEN.innerHTML = nameEN31;
        charTitle.innerHTML = title31;
        charIntro.innerHTML = intro31;
        charStand.src = './Img/立绘/伊吹萃香.png';
        break;
    case 31:
        charNameCN.innerHTML = nameCN32;
        charNameEN.innerHTML = nameEN32;
        charTitle.innerHTML = title32;
        charIntro.innerHTML = intro32;
        charStand.src = './Img/立绘/爱丽丝·玛格特洛依德.png';
        break;
    case 32:
        charNameCN.innerHTML = nameCN33;
        charNameEN.innerHTML = nameEN33;
        charTitle.innerHTML = title33;
        charIntro.innerHTML = intro33;
        charStand.src = './Img/立绘/河城荷取.png';
        break;
    case 33:
        charNameCN.innerHTML = nameCN34;
        charNameEN.innerHTML = nameEN34;
        charTitle.innerHTML = title34;
        charIntro.innerHTML = intro34;
        charStand.src = './Img/立绘/风见幽香.png';
        break;
    case 34:
        charNameCN.innerHTML = nameCN35;
        charNameEN.innerHTML = nameEN35;
        charTitle.innerHTML = title35;
        charIntro.innerHTML = intro35;
        charStand.src = './Img/立绘/星熊勇仪.png';
        break;
    case 35:
        charNameCN.innerHTML = nameCN36;
        charNameEN.innerHTML = nameEN36;
        charTitle.innerHTML = title36;
        charIntro.innerHTML = intro36;
        charStand.src = './Img/立绘/古明地觉.png';
        break;
    case 36:
        charNameCN.innerHTML = nameCN37;
        charNameEN.innerHTML = nameEN37;
        charTitle.innerHTML = title37;
        charIntro.innerHTML = intro37;
        charStand.src = './Img/立绘/古明地恋.png';
        break;
    case 37:
        charNameCN.innerHTML = nameCN38;
        charNameEN.innerHTML = nameEN38;
        charTitle.innerHTML = title38;
        charIntro.innerHTML = intro38;
        charStand.src = './Img/立绘/琪露诺.png';
        break;
    case 38:
        charNameCN.innerHTML = nameCN39;
        charNameEN.innerHTML = nameEN39;
        charTitle.innerHTML = title39;
        charIntro.innerHTML = intro39;
        charStand.src = './Img/立绘/红美铃.png';
        break;
    case 39:
        charNameCN.innerHTML = nameCN40;
        charNameEN.innerHTML = nameEN40;
        charTitle.innerHTML = title40;
        charIntro.innerHTML = intro40;
        charStand.src = './Img/立绘/秋静叶.png';
        break;
    case 40:
        charNameCN.innerHTML = nameCN41;
        charNameEN.innerHTML = nameEN41;
        charTitle.innerHTML = title41;
        charIntro.innerHTML = intro41;
        charStand.src = './Img/立绘/秋穰子.png';
        break;
}

//#region 初始化

charStand.onload = function () {
    if (charStand.width / charStand.height > 7 / 10 || charStand.height / charStand.width < 10 / 7) {
        charStand.style.width = "55%";
    }
    else {
        charStand.style.width = "45%";
    }
    charStand.style.opacity = "1";
    charStand.style.right = "0";
    charInformation.style.right = "-50px";
    charInformation.style.opacity = 1;
    AdjustFontSizeCN(charNameCN.innerHTML);
    AdjustFontSizeEN(charNameEN.innerHTML);
};
//#endregion


//#region 切换按钮
btnLeft.addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = charNum - 1;
    }
    localStorage.setItem('charIndex', index.toString());
    location.reload();
});

btnRight.addEventListener('click', function () {
    index++;
    if (index > charNum - 1) {
        index = 0;
    }
    localStorage.setItem('charIndex', index.toString());
    location.reload();
});

//#endregion
// screen.onload = function () {
//     if (Number.isNaN(index) == true) {
//         index = 0;
//         localStorage.setItem('charIndex', "0");
//     }
// }

console.log(index);