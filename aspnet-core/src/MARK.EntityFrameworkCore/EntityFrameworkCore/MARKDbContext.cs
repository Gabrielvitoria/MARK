using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using MARK.Authorization.Roles;
using MARK.Authorization.Users;
using MARK.MultiTenancy;

namespace MARK.EntityFrameworkCore
{
    public class MARKDbContext : AbpZeroDbContext<Tenant, Role, User, MARKDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public MARKDbContext(DbContextOptions<MARKDbContext> options)
            : base(options)
        {
        }
    }
}
