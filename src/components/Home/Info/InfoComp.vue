<script setup>
import { ref } from 'vue';
import './InfoComp.css'
import { Transition } from 'vue'
let arrow1 = ref(false)
let arrow2 = ref(false)

let open1 = ref(false)
let open2 = ref(false)
function openText1(){
    open1.value = !open1.value
    arrow1.value = !arrow1.value
}
function openText2(){
    open2.value = !open2.value
    arrow2.value = !arrow2.value
}
</script>   
<template>
    <section class="info">
        <div class="container">
            <div class="info__wrapper">
                <div>
                    <h2   h2 class="info__title">Asaxiy kompaniyasi haqida</h2>
                    <p class="info__text">Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.</p>
                    <p class="info__text">Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.</p>
                    <ul class="info__list">
                        <li class="info__item">
                            <div class="info__text-wrapper" @click="openText1">
                                <p class="info__item-text">Kompaniyaning ish tamoyili</p>
                                <i v-if="arrow1" class="minus fa-solid fa-chevron-up"></i>
                                <i  v-else class="minus fa-solid fa-chevron-down"></i>
                            </div>
                            <Transition name="page-opacity" mode="out-in">
                                <p class="info__description" :class="{opening:open1}">Har bir xaridor telefonlar va boshqa gadjetlarni qulay shart-sharoitlarda, maksimal darajada tez tanlay olishi kerak; shuning uchun biz intuitiv tushunarli menyu yaratganmiz, internetning yangi foydalanuvchilari ham uni o‘zlashtirib olishlari oson. Juda qulay bo‘lishini ko‘zlab biz menyu qismini tegishli bo‘limlarga ajratganmiz, ularda siz 15 ming xildan ortiq orgtexnika va unga yondosh tovarlarni topishingiz mumkin. Ular quyidagicha ko‘rinish olgan:</p>
                            </Transition>
                        </li>
                        <li class="info__item">
                            <div class="info__text-wrapper" @click="openText2">
                                <p  class="info__item-text">Bizning afzalliklarimiz</p>
                                <i v-if="arrow2" class="minus fa-solid fa-chevron-up"></i>
                                <i  v-else class="minus fa-solid fa-chevron-down"></i>
                            </div>
                            <Transition name="page-opacity" mode="out-in">
                                <p class="info__description" :class="{opening:open2}">Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini shiddat bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga ancha-muncha chegirmalarni va bir qator shaharlarga tezkor yetkazib berishni taklif etmoqdamiz. Bizning xizmat ko‘rsatish hududimizga Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoiy, Qashqadaryo, Samarqand, Sirdaryo, Surxondaryo va butun Toshkent viloyatidagi, shuningdek, Qoraqalpog‘iston Respublikasidagi shaharlar kiradi. Bu hali biz tovar yetkazib berayotgan hududlarning to‘liq xaritasi emas. Bizning yetkazib berish hududlarimiz bilan batafsil tanishish uchun internet-do‘konimiz mutaxassisiga qo‘ng‘iroq qilishingiz mumkin, u sizni qiziqtiruvchi barcha ma’lumotlarni taqdim etadi.</p>
                            </Transition>
                        </li>
                    </ul>
                    <p class="info__bottom-text">
                        <br>
                        "Asaxiy Books" MCHJ
                        <br>
                        Ro'yxatdan o'tish raqami: 646439
                        <br>
                        INN: 305829008
                        <br>
                        MCHJ rahbari: Allayev Firuz Abdunasimovich
                    </p>
                </div>
            </div>
        </div>
        <div class="background">
            
        </div>
    </section>
</template>