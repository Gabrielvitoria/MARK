using System.Threading.Tasks;
using MARK.Configuration.Dto;

namespace MARK.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
