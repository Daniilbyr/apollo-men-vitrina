# Apollo — мужская витрина (демо)

Статический лендинг: главный экран, подборка товаров, карточка парфюма с вариантами объёма и концентрации, отзывы, футер.

## Залить на GitHub (первый раз)

Репозиторий в этом каталоге уже с веткой `main` и коммитом. Осталось создать пустой проект на GitHub и отправить код.

**Вариант A — сайт GitHub**

1. Откройте [github.com/new](https://github.com/new).
2. Имя репозитория: **`apollo-men-vitrina`** (как в `<base href>` в `index.html`).
3. Публичный, **без** README, .gitignore и лицензии (чтобы не было конфликта с первым коммитом).
4. Создайте репозиторий, затем в папке проекта выполните:

```powershell
cd c:\Users\Kartoshka\cu\apollo-men-vitrina
git push -u origin main
```

При запросе логина используйте **Personal Access Token** (не пароль от GitHub): [настройки → Developer settings → Tokens](https://github.com/settings/tokens).

**Вариант B — GitHub CLI** (после `winget install GitHub.cli` и `gh auth login`):

```powershell
cd c:\Users\Kartoshka\cu\apollo-men-vitrina
git remote remove origin
gh repo create apollo-men-vitrina --public --source=. --remote=origin --push --description "Apollo: мужская витрина (демо)"
```

## Просмотр на GitHub Pages

После включения Pages (**Settings → Pages → Branch: `main`, folder `/ (root)`**) сайт будет доступен по адресу:

**https://daniilbyr.github.io/apollo-men-vitrina/**

Открывайте с завершающим слэшем в URL или через главную ссылку репозитория — так корректно подхватится `<base href>`.

Фотографии на витрине и в карточках подгружаются с **Unsplash** (лицензия Unsplash — разрешено использование в проектах; при публикации уместно указать источник в описании проекта).

## Локально

Откройте `index.html` в браузере или поднимите любой статический сервер из корня репозитория. Для полного соответствия путям как на Pages временно можно выставить в `<base>` локальный URL.

## Стек

HTML, CSS, без сборщика. Скрипт `tools/generate-product-images.ps1` — опционально для картинок.
