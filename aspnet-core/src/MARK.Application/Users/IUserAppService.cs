using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MARK.Roles.Dto;
using MARK.Users.Dto;

namespace MARK.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
