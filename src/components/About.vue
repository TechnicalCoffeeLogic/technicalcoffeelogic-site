<script setup>

import Header from './Header.vue';
import AboutBlock from './AboutBlock.vue';
import Team from './Team.vue';

const purposeBlurb = `Technical Coffee Logic aims to code and develop apps to the glory of Christ.
                     As a Christian company, Technical Coffee Logic believes that it can design and 
                     bring the best ideas to fruition, because the company knows that all things have 
                     been created by Christ and are for Christ. Furthermore Technical Coffee Logic recognize that a man's 
                     chief end is to glorify God and enjoy Him forever, that means Christians should be able to 
                     enjoy all things to a better degree than unbelievers. Therefore this would also 
                     apply to software, web, and app development. Technical Coffee Logic desires that Christ's reign is 
                     seen through code and to make a superb product, since a Christian's motivation is Christ and His Kingdom.`;

const missionBlurb = `To turn the world upside down for Christ with each product that is developed 
                    "These men who have turned the world upside down have come here also” — Acts 17:6`

const nameBlurb = `Technical coffee logic is that burst of inspiration and logic that comes as you drink a cup of coffee. As a developer there is nothing
                   greater than when you can't figure out an issue and you take a big swig of coffee then that technical logic kicks in.`;
</script>

<template>
    <Team></Team>

    <AboutBlock :title="'Purpose'" :blurb="purposeBlurb">
    </AboutBlock>

    <AboutBlock :title="'Mission Statement'" :blurb="missionBlurb">
    </AboutBlock>

    <AboutBlock :title="`What's with the name?`" :blurb="nameBlurb"></AboutBlock>


</template>

<style scoped>
</style>