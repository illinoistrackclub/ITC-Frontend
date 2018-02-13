'use strict';

angular.module('itcFrontendApp')

// Defines available tags for training resources
.constant('TAGS', {
    BODYSECTION: {
        arms: {
            name:'Arms',
            body_parts: {
                biceps:'Biceps',
                triceps:'Triceps'
            }
        },
        chest:{
            name:'Chest',
            body_parts: {
                pecs:'Pectorals'
            }
        },
        shoulders:{
            name:'Shoulders',
            body_parts: {
            }
        },
        legs:{
            name:'Legs',
            body_parts: {
                quads:'Quads',
                calves:'Calves'
            }
        }
    },
    EXERCISE: {
        strength: 'Strength',
        flexibility: 'Flexibility'
    }
});
