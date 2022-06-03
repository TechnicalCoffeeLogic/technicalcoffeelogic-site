<script setup>

import Header from './Header.vue';
import AboutBlock from './AboutBlock.vue';

const purposeBlurb = `Technical Coffee Logic aims to code to the glory of Christ👑. 
                But what does that mean? As a Christian company, Technical Coffee Logic believes 
                that we can design and bring the best ideas to fruition, because we understand that all things have 
                been created by Christ👑 and are for Christ👑. Furthermore we recognize that a man's chief end is to 
                glorify God and enjoy Him forever, that means we should be able to enjoy all 
                things to a better degree than an unbeliever. Therefore this would also 
                apply to software, web, and App development. Technical Coffee Logic desires that Christ's reign is 
                seen through code and to make a superb product, since our motivation is not 
                ourselves, but Christ👑 and His Kingdom.`;

const missionBlurb = `These men who have turned the world upside down have come here also” — Acts 17:6
                    The Mission of Technical Coffee Logic is to continue to turn the world upside down for Christ by 
                    entering into the app development scene where there seems to be a lack of believers, whether that be
                    local or on a larger stage.`
</script>

<template>
    <Header :headerTitle="'About Technical Coffee Logic'"></Header>

    <div>
        <AboutBlock :title="'Purpose 🔥'" :blurb="purposeBlurb">
        </AboutBlock>

        <AboutBlock :title="'Mission Statement 🔥'" :blurb="missionBlurb">
        </AboutBlock>
    </div>

</template>

<style scoped>
</style>