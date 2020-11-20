import ProfileService from '../services/ProfileService'

export default class ProfileController {
  constructor() {
    this.profileService = new ProfileService()
  }

  async show(request, response) {
    try {
      const { id } = request.getUser()
      const profile = await this.profileService.show(id)

      return response.okResponse(profile)
    } catch (e) {
      console.log(e)

      return response.internalErrorResponse(e)
    }
  }
}
