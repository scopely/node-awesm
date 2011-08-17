(function() {
  var Metadata;
  Metadata = (function() {
    function Metadata() {
      this.parent = null;
      this.service_userid = null;
      this.campaign = null;
      this.campaign_name = null;
      this.campaign_description = null;
      this.user_id = null;
      this.user_id_username = null;
      this.user_id_profile_url = null;
      this.user_id_icon_url = null;
      this.tag = null;
      this.notes = null;
    }
    Metadata.prototype.getMetadata = function() {
      var metadata;
      metadata = {};
      if (this.parent) {
        metadata.parent = this.parent;
      }
      if (this.service_userid) {
        metadata.service_userid = this.service_userid;
      }
      if (this.campaign) {
        metadata.campaign = this.campaign;
      }
      if (this.campaign_name) {
        metadata.campaign_name = this.campaign_name;
      }
      if (this.campaign_description) {
        metadata.campaign_description = this.campaign_description;
      }
      if (this.user_id) {
        metadata.user_id = this.user_id;
      }
      if (this.user_id_username) {
        metadata.user_id_username = this.user_id_username;
      }
      if (this.user_id_profile_url) {
        metadata.user_id_profile_url = this.user_id_profile_url;
      }
      if (this.user_id_icon_url) {
        metadata.user_id_icon_url = this.user_id_icon_url;
      }
      if (this.tag) {
        metadata.tag = this.tag;
      }
      if (this.notes) {
        metadata.notes = this.notes;
      }
      return metadata;
    };
    return Metadata;
  })();
  exports.Metadata = Metadata;
}).call(this);
