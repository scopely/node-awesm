class Metadata

  constructor : () ->
    @parent               = null
    @service_userid       = null
    @campaign             = null
    @campaign_name        = null
    @campaign_description = null
    @user_id              = null
    @user_id_username     = null
    @user_id_profile_url  = null
    @user_id_icon_url     = null
    @tag                  = null
    @notes                = null


  getMetadata : () ->
    metadata = {}
    metadata.parent               = @parent if @parent
    metadata.service_userid       = @service_userid if @service_userid
    metadata.campaign             = @campaign if @campaign
    metadata.campaign_name        = @campaign_name if @campaign_name
    metadata.campaign_description = @campaign_description if @campaign_description
    metadata.user_id              = @user_id if @user_id
    metadata.user_id_username     = @user_id_username if @user_id_username
    metadata.user_id_profile_url  = @user_id_profile_url if @user_id_profile_url
    metadata.user_id_icon_url     = @user_id_icon_url if @user_id_icon_url
    metadata.tag                  = @tag if @tag
    metadata.notes                = @notes if @notes
    return metadata


exports.Metadata = Metadata