/*
* @Author: Akhil Anand
* @Date:   2017-10-29 22:28:37
* @Last Modified time: 2017-10-30 00:08:01
*/
define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/mage',
    'jquery/ui',
    'jquery/jquery.cookie'
], function ($, modal) {
    'use strict';

    $.widget('ak.processStoreSelector', {

        /**
         *
         * @private
         */
        _create: function () {
            var self = this,
                popup_store_options = {
                    type: 'popup',
                    responsive: true,
                    innerScroll: true,
                    title: this.options.popupTitle,
                    buttons: false,
                    modalClass : 'popup-store-selector'
                };

            modal(popup_store_options, this.element);
            var store_selector = $.cookie('store_selector');

            $("#store-selector").on('click',function(){
                self.element.modal('openModal');
            });

            if(store_selector != 1){
                setTimeout(function() {
                    self.element.modal('openModal');
                }, 2000);
            }
        },
    });

    return $.ak.processStoreSelector;
});
