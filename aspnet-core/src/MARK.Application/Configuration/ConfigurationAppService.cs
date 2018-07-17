using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using MARK.Configuration.Dto;

namespace MARK.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : MARKAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
