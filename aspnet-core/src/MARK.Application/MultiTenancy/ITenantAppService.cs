using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MARK.MultiTenancy.Dto;

namespace MARK.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
