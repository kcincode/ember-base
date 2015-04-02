import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
    authenticator: 'authenticator:custom',
    attrs: {},
    actions: {
        authenticate: function() {
            var _this = this;
            this._super().then(null, function(response) {
                if(response.code === 401){
                    _this.set('attrs.errorMsg', response.error);
                } else {
                    _this.set('attrs.errorMsg', "An error occured, please try again");
                }
            });
        }
    }
});
