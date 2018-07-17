using System.ComponentModel.DataAnnotations;

namespace MARK.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}