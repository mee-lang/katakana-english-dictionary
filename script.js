// カタカナことば辞典の登録データ
// 「word」= カタカナ英語、「easy」= わかりやすい日本語
// 意味や言い換えは文脈によって変わるため、研究で使う前に内容を確認してください。
const dictionary = [
  {word:"アジェンダ",easy:"会議の議題",meaning:"会議で話し合う内容や順番をまとめたものです。",example:"今日の会議の議題を確認します。",category:"仕事・手続き"},
  {word:"ダイバーシティ",easy:"多様性",meaning:"年齢や性別、考え方など、さまざまな違いを認め合うことです。",example:"多様性を大切にする職場を目指します。",category:"仕事・手続き"},
  {word:"インクルージョン",easy:"誰もが参加できること",meaning:"違いのある人も含め、誰もが参加し力を発揮できるようにすることです。",example:"誰もが参加できる環境を整えます。",category:"仕事・手続き"},
  {word:"コンプライアンス",easy:"法令や決まりを守ること",meaning:"法律や社会のルール、職場の決まりを守って行動することです。",example:"職場の決まりを守って仕事をします。",category:"仕事・手続き"},
  {word:"ガバナンス",easy:"組織を適切に管理する仕組み",meaning:"組織が正しく運営されるように、方針や確認の仕組みを整えることです。",example:"組織の運営方法を見直します。",category:"仕事・手続き"},
  {word:"エビデンス",easy:"根拠となる資料や事実",meaning:"考えや判断が正しいかを確かめるための資料や事実です。",example:"判断の根拠となる資料を示してください。",category:"仕事・手続き"},
  {word:"アサイン",easy:"担当を割り当てること",meaning:"仕事や役割を人に割り当てることです。",example:"担当者を決めて仕事を割り当てます。",category:"仕事・手続き"},
  {word:"リソース",easy:"人・物・時間などの資源",meaning:"仕事を進めるために使える人、物、お金、時間などです。",example:"使える人や時間を確認します。",category:"仕事・手続き"},
  {word:"タスク",easy:"作業・やるべきこと",meaning:"期限や目的に合わせて行う必要がある作業です。",example:"今日やるべき作業を整理します。",category:"仕事・手続き"},
  {word:"マイルストーン",easy:"途中の目標地点",meaning:"計画の途中で、達成状況を確認するために決める節目です。",example:"計画の途中の目標日を決めます。",category:"仕事・手続き"},
  {word:"KPI",easy:"成果を測るための重要な目安",meaning:"目標にどれくらい近づいているかを確認するための重要な数字や目安です。",example:"成果を測る目安を決めます。",category:"仕事・手続き"},
  {word:"スケーラビリティ",easy:"規模を大きくできる性質",meaning:"利用者や仕事が増えても対応できる度合いです。",example:"利用者が増えても対応できるか確認します。",category:"仕事・手続き"},
  {word:"アサーティブ",easy:"相手を尊重して自分の意見を伝える",meaning:"相手の考えも大切にしながら、自分の意見や気持ちを率直に伝えることです。",example:"相手を尊重しながら自分の意見を伝えます。",category:"仕事・手続き"},
  {word:"ファシリテーション",easy:"話し合いを進める手助け",meaning:"参加者の意見を引き出し、話し合いが進むように助けることです。",example:"話し合いが進むように進行します。",category:"仕事・手続き"},
  {word:"ファシリテーター",easy:"話し合いを進める人",meaning:"参加者の意見を整理し、話し合いを進める役割の人です。",example:"進行役が意見を整理します。",category:"仕事・手続き"},
  {word:"ステークホルダー",easy:"関係する人や組織",meaning:"仕事や計画によって影響を受けたり、関わったりする人や組織です。",example:"関係する人たちの意見を聞きます。",category:"仕事・手続き"},
  {word:"アライアンス",easy:"協力関係",meaning:"会社や団体などが、目的のために協力する関係です。",example:"二つの団体が協力関係を結びます。",category:"仕事・手続き"},
  {word:"イノベーション",easy:"新しい価値を生み出すこと",meaning:"新しい考え方や技術で、これまでにない価値や仕組みを生み出すことです。",example:"新しい仕組みを生み出します。",category:"仕事・手続き"},
  {word:"ローンチ",easy:"新しい商品やサービスを始めること",meaning:"商品やサービスを世の中に向けて正式に公開・開始することです。",example:"新しいサービスを開始します。",category:"仕事・手続き"},
  {word:"ブレインストーミング",easy:"自由にアイデアを出し合うこと",meaning:"良し悪しをすぐに判断せず、参加者が自由に考えを出し合う方法です。",example:"みんなで自由に考えを出し合います。",category:"仕事・手続き"},
  {word:"アサインメント",easy:"課題・割り当てられた仕事",meaning:"人に割り当てられた仕事や、取り組む課題のことです。",example:"担当する課題を確認します。",category:"仕事・手続き"},
  {word:"オンボーディング",easy:"新しく参加した人を支える取り組み",meaning:"新しい職場や組織に入った人が、仕事や環境に慣れるための支援です。",example:"新入社員が仕事に慣れるよう支援します。",category:"仕事・手続き"},
  {word:"オフボーディング",easy:"組織を離れる人の手続きを支えること",meaning:"退職や異動などで組織を離れる人に必要な手続きや引き継ぎを行うことです。",example:"退職する人の手続きと引き継ぎを行います。",category:"仕事・手続き"},
  {word:"ナレッジ",easy:"知識や経験から得た情報",meaning:"仕事や学習に役立つ知識や経験、情報のことです。",example:"仕事で得た知識を共有します。",category:"仕事・手続き"},
  {word:"ナレッジシェア",easy:"知識や経験を共有すること",meaning:"一人が持つ知識や経験を、ほかの人にも伝えて役立てることです。",example:"仕事の知識をみんなで共有します。",category:"仕事・手続き"},
  {word:"ペンディング",easy:"保留になっていること",meaning:"すぐには決めず、いったん保留にしている状態です。",example:"この件はいったん保留にします。",category:"仕事・手続き"},
  {word:"リスケ",easy:"予定を組み直すこと",meaning:"決まっていた日程や予定を変更して、組み直すことです。",example:"会議の日程を変更します。",category:"仕事・手続き"},
  {word:"コンセンサス",easy:"関係者の合意",meaning:"関係する人たちが話し合い、意見をまとめて納得することです。",example:"関係者の合意を得てから進めます。",category:"仕事・手続き"},
  {word:"アカウンタビリティ",easy:"説明する責任",meaning:"自分の判断や行動について、関係する人に理由や結果を説明する責任です。",example:"決定した理由を関係者に説明します。",category:"仕事・手続き"},
  {word:"アカウント",easy:"利用者の登録情報",meaning:"サービスを使う人を区別するための情報です。",example:"新しいアカウントを作ってください。",category:"スマホ・インターネット"},
  {word:"アクセス",easy:"つなぐ・見に行く",meaning:"ウェブサイトや場所などに接続したり、そこへ行ったりすることです。",example:"詳しくは公式サイトにアクセスしてください。",category:"スマホ・インターネット"},
  {word:"アップデート",easy:"新しい状態にする",meaning:"アプリや機器の内容を新しくして、問題を直したり機能を追加したりすることです。",example:"アプリを最新の状態にしてください。",category:"スマホ・インターネット"},
  {word:"アプリ",easy:"スマホなどで使うソフト",meaning:"スマートフォンやパソコンで特定のことをするためのプログラムです。",example:"このアプリで予約できます。",category:"スマホ・インターネット"},
  {word:"インストール",easy:"機器に入れて使えるようにする",meaning:"アプリやソフトを機器に入れ、使える状態にすることです。",example:"アプリをスマートフォンに入れてください。",category:"スマホ・インターネット"},
  {word:"インターネット",easy:"世界中のコンピューターをつなぐ仕組み",meaning:"情報を見たり送ったりするために、世界中の機器をつなぐ仕組みです。",example:"インターネットで情報を調べます。",category:"スマホ・インターネット"},
  {word:"ウェブサイト",easy:"インターネット上のページ",meaning:"インターネットで見ることができる情報のページや、その集まりです。",example:"公式のウェブサイトを確認してください。",category:"スマホ・インターネット"},
  {word:"オンライン",easy:"インターネットにつながった状態",meaning:"インターネットを使って、離れた場所とつながっていることです。",example:"オンラインで申し込みができます。",category:"スマホ・インターネット"},
  {word:"オフライン",easy:"インターネットにつながっていない状態",meaning:"インターネットに接続していない状態です。",example:"この機能はオフラインでも使えます。",category:"スマホ・インターネット"},
  {word:"クラウド",easy:"インターネット上にデータを保存する仕組み",meaning:"自分の機器だけでなく、インターネット上のコンピューターにデータを保存して使う仕組みです。",example:"写真をクラウドに保存します。",category:"スマホ・インターネット"},
  {word:"クリック",easy:"画面を押す",meaning:"マウスなどで画面上のボタンや文字を選ぶ操作です。",example:"次へをクリックしてください。",category:"スマホ・インターネット"},
  {word:"コピー",easy:"同じものを複製する",meaning:"文章や画像などを、元のものを残したまま複製することです。",example:"この文章をコピーしてください。",category:"スマホ・インターネット"},
  {word:"コメント",easy:"意見や感想",meaning:"文章や出来事などに対して書く意見や感想です。",example:"感想をコメントに書いてください。",category:"学校・社会"},
  {word:"サインイン",easy:"登録した情報で利用を始める",meaning:"登録済みの情報を使って、サービスに入ることです。",example:"自分の情報でサインインしてください。",category:"スマホ・インターネット"},
  {word:"サインアウト",easy:"利用を終えて退出する",meaning:"使っているサービスから退出することです。",example:"使い終わったらサインアウトしてください。",category:"スマホ・インターネット"},
  {word:"スクリーンショット",easy:"画面の写真",meaning:"スマートフォンやパソコンに表示されている画面を画像として保存することです。",example:"画面の写真を送ってください。",category:"スマホ・インターネット"},
  {word:"ダウンロード",easy:"データを機器に取り込む",meaning:"インターネットなどから、ファイルや画像を自分の機器に保存することです。",example:"資料をパソコンに保存してください。",category:"スマホ・インターネット"},
  {word:"データ",easy:"記録された情報",meaning:"文字、数字、画像など、保存したり利用したりする情報です。",example:"入力した情報を確認してください。",category:"スマホ・インターネット"},
  {word:"デジタル",easy:"数字などで情報を扱う方式",meaning:"情報を数字などに置き換えて、機器で記録・処理する方式です。",example:"デジタルの案内板を確認してください。",category:"スマホ・インターネット"},
  {word:"パスワード",easy:"本人かどうか確かめるための秘密の文字",meaning:"本人が利用者であることを確かめるために使う、他人に教えない文字や数字です。",example:"パスワードを他人に教えないでください。",category:"スマホ・インターネット"},
  {word:"バックアップ",easy:"予備の保存",meaning:"データが消えたときに備えて、別の場所にも保存しておくことです。",example:"大切な写真の予備を保存しましょう。",category:"スマホ・インターネット"},
  {word:"ファイル",easy:"名前をつけて保存したデータ",meaning:"文章、写真などをひとまとまりにして保存したものです。",example:"このファイルを開いてください。",category:"スマホ・インターネット"},
  {word:"ブラウザー",easy:"ウェブページを見るためのソフト",meaning:"インターネット上のページを開いて見るためのソフトです。",example:"ブラウザーでサイトを開いてください。",category:"スマホ・インターネット"},
  {word:"ホームページ",easy:"ウェブサイトのページ",meaning:"ウェブサイトの最初のページや、ウェブサイト全体を指す言葉として使われます。",example:"市のホームページでお知らせを確認してください。",category:"スマホ・インターネット"},
  {word:"メール",easy:"電子的に送る手紙",meaning:"インターネットなどを使って文章やファイルを送る仕組みです。",example:"確認のメールを送ります。",category:"スマホ・インターネット"},
  {word:"リンク",easy:"別のページへ移動するためのつながり",meaning:"押すと別のページや情報を開ける文字や画像などです。",example:"案内のリンクを押してください。",category:"スマホ・インターネット"},
  {word:"ログイン",easy:"登録した情報で利用を始める",meaning:"利用者の情報を確認して、サービスを使える状態にすることです。",example:"登録した情報でログインしてください。",category:"スマホ・インターネット"},
  {word:"ログアウト",easy:"利用を終えて退出する",meaning:"利用中のサービスから退出することです。",example:"共有のパソコンではログアウトしてください。",category:"スマホ・インターネット"},
  {word:"Wi-Fi",easy:"無線でインターネットにつなぐ仕組み",meaning:"ケーブルを使わずに、機器をネットワークにつなぐ仕組みです。",example:"無料の無線通信が利用できます。",category:"スマホ・インターネット"},
  {word:"アップロード",easy:"データをインターネット上に送る",meaning:"自分の機器にあるファイルなどを、インターネット上の場所へ送ることです。",example:"写真をサイトに送信してください。",category:"スマホ・インターネット"},
  {word:"キャンセル",easy:"取り消す",meaning:"予約や申し込みなどを取り消すことです。",example:"予約を取り消す場合は、前もって連絡してください。",category:"日常生活"},
  {word:"スケジュール",easy:"予定",meaning:"これから行うことや、その時間をまとめたものです。",example:"明日の予定を確認してください。",category:"仕事・手続き"},
  {word:"タイムリミット",easy:"期限・時間の限り",meaning:"何かを終えなければならない最後の時間です。",example:"申し込みの期限は金曜日です。",category:"仕事・手続き"},
  {word:"トラブル",easy:"問題・困ったこと",meaning:"予定どおりに進まない問題や困った出来事です。",example:"問題が起きたら係の人に知らせてください。",category:"日常生活"},
  {word:"パターン",easy:"型・決まった形",meaning:"同じように繰り返される形や種類です。",example:"よくある型を紹介します。",category:"日常生活"},
  {word:"プラン",easy:"計画",meaning:"何をどのように行うか、前もって考えた内容です。",example:"旅行の計画を立てます。",category:"日常生活"},
  {word:"マナー",easy:"人に迷惑をかけないための作法",meaning:"人と気持ちよく過ごすための行動や礼儀です。",example:"電車の中では周りへの気づかいを大切にしましょう。",category:"日常生活"},
  {word:"ルール",easy:"決まり",meaning:"みんなが守ることになっている決まりです。",example:"利用する前に決まりを読んでください。",category:"日常生活"},
  {word:"リサイクル",easy:"資源をもう一度使うこと",meaning:"使い終わった物を材料などに戻し、再び利用することです。",example:"空き缶を資源として回収します。",category:"日常生活"},
  {word:"リニューアル",easy:"新しく作り直すこと",meaning:"建物、商品、サービスなどを新しくすることです。",example:"駅の売店が新しくなりました。",category:"日常生活"},
  {word:"レンタル",easy:"料金を払って借りること",meaning:"お金を払って、一定の期間だけ物を借りることです。",example:"必要な道具を借りられます。",category:"日常生活"},
  {word:"メンテナンス",easy:"点検や手入れ",meaning:"機械や設備などを安全に使えるよう、点検や手入れをすることです。",example:"点検のため、今日は利用できません。",category:"日常生活"},
  {word:"サービス",easy:"提供される助けや便利な仕組み",meaning:"人のために行う仕事や、利用できる仕組みなどを指します。",example:"この窓口では相談を受け付けています。",category:"日常生活"},
  {word:"イベント",easy:"催し・行事",meaning:"人が集まって行う催しや行事です。",example:"地域のお祭りを開催します。",category:"学校・社会"},
  {word:"コミュニケーション",easy:"人と気持ちや情報を伝え合うこと",meaning:"話したり、書いたりして、考えや情報を伝え合うことです。",example:"相手とよく話し合いましょう。",category:"学校・社会"},
  {word:"サポート",easy:"助けること",meaning:"人が何かをするときに手助けすることです。",example:"手続きの方法を職員が手伝います。",category:"日常生活"},
  {word:"システム",easy:"いくつかの仕組みを組み合わせたもの",meaning:"目的を達成するために、いくつかの決まりや機能を組み合わせた仕組みです。",example:"新しい受付の仕組みを導入します。",category:"仕事・手続き"},
  {word:"スタッフ",easy:"職員・係の人",meaning:"ある仕事や活動を担当する人たちです。",example:"わからないことは係の人に聞いてください。",category:"仕事・手続き"},
  {word:"チェック",easy:"確認すること",meaning:"間違いや問題がないかを確かめることです。",example:"名前と住所を確認してください。",category:"仕事・手続き"},
  {word:"テクニック",easy:"技術・やり方",meaning:"何かをうまく行うための技術や方法です。",example:"簡単な使い方を説明します。",category:"学校・社会"},
  {word:"テーマ",easy:"中心となる話題",meaning:"話し合いや作品などの中心になる内容です。",example:"今日の話題は防災です。",category:"学校・社会"},
  {word:"トレーニング",easy:"練習・訓練",meaning:"できることを増やすために、繰り返し練習することです。",example:"毎日少しずつ練習します。",category:"医療・健康"},
  {word:"ノルマ",easy:"達成しなければならない目標量",meaning:"決められた期間に達成するよう求められる仕事や量です。",example:"今月の目標量を確認します。",category:"仕事・手続き"},
  {word:"フォロー",easy:"あとから助けたり確認したりすること",meaning:"一度行ったことの後に、必要な助けや確認をすることです。",example:"申し込み後も担当者が手伝います。",category:"仕事・手続き"},
  {word:"プレゼンテーション",easy:"説明や発表",meaning:"相手に情報や考えを伝えるために、資料などを使って説明することです。",example:"調査結果を発表します。",category:"学校・社会"},
  {word:"プロジェクト",easy:"目的を達成するための計画や活動",meaning:"ある目的のために、期間や役割を決めて進める活動です。",example:"地域の安全を考える活動を始めます。",category:"学校・社会"},
  {word:"マニュアル",easy:"説明書・手順書",meaning:"何かをするときの方法や手順を説明したものです。",example:"使い方の説明書を読んでください。",category:"仕事・手続き"},
  {word:"ミーティング",easy:"打ち合わせ・会議",meaning:"情報を共有したり、相談したりするために集まることです。",example:"午後に打ち合わせをします。",category:"仕事・手続き"},
  {word:"メッセージ",easy:"伝えたい内容・伝言",meaning:"相手に伝える文章や言葉です。",example:"伝言を確認してください。",category:"スマホ・インターネット"},
  {word:"リーダー",easy:"まとめ役",meaning:"集団をまとめ、活動を進める人です。",example:"班のまとめ役を決めます。",category:"学校・社会"},
  {word:"リスク",easy:"危険や問題が起きる可能性",meaning:"悪いことや危険なことが起きる可能性です。",example:"危険がないか確認してください。",category:"防災・公共"},
  {word:"レベル",easy:"程度・段階",meaning:"能力や難しさなどが、どのくらいかを示す言葉です。",example:"自分に合う難しさを選んでください。",category:"学校・社会"},
  {word:"アイデア",easy:"考え・思いつき",meaning:"問題を解決したり、何かを作ったりするための考えです。",example:"改善するための考えを出してください。",category:"学校・社会"},
  {word:"イメージ",easy:"頭に思い浮かべる姿や考え",meaning:"物事について心の中に思い浮かべる姿や印象です。",example:"完成した姿を思い浮かべてください。",category:"学校・社会"},
  {word:"インパクト",easy:"強い印象",meaning:"人の心に強く残る印象や影響です。",example:"強い印象を与える写真です。",category:"学校・社会"},
  {word:"エリア",easy:"地域・範囲",meaning:"ある場所や活動の範囲を指す言葉です。",example:"この地域では工事をしています。",category:"防災・公共"},
  {word:"オープン",easy:"開く・公開する",meaning:"店や施設などを開くこと、または情報を公開することです。",example:"図書館は午前九時に開きます。",category:"日常生活"},
  {word:"クローズ",easy:"閉じる・終了する",meaning:"店や施設を閉めたり、受付などを終了したりすることです。",example:"受付は午後五時に終了します。",category:"日常生活"},
  {word:"コンセント",easy:"電気を取る差し込み口",meaning:"電気を使う機器のプラグを差し込む場所です。",example:"電源の差し込み口を確認してください。",category:"日常生活"},
  {word:"コンタクト",easy:"連絡・接触",meaning:"人と連絡を取ることなどを指します。文脈によっては目に入れるレンズを意味します。",example:"担当者に連絡してください。",category:"仕事・手続き"},
  {word:"サイズ",easy:"大きさ",meaning:"物の大きさや寸法です。",example:"自分に合う大きさを選んでください。",category:"日常生活"},
  {word:"シェア",easy:"共有する・分け合う",meaning:"情報や物などを、ほかの人と共有したり分け合ったりすることです。",example:"資料をみんなで共有します。",category:"日常生活"},
  {word:"スキル",easy:"能力・技術",meaning:"何かを行うために身につけた能力や技術です。",example:"仕事に必要な能力を学びます。",category:"仕事・手続き"},
  {word:"ストレス",easy:"心や体にかかる負担",meaning:"緊張や心配などによって、心や体にかかる負担です。",example:"疲れたときは休む時間を取りましょう。",category:"医療・健康"},
  {word:"スペース",easy:"場所・空間",meaning:"物を置いたり、人が使ったりできる場所です。",example:"車いすのための場所を空けてください。",category:"日常生活"},
  {word:"セキュリティ",easy:"安全を守る仕組み",meaning:"人や情報、場所などを危険から守るための仕組みです。",example:"個人情報を守る設定を確認してください。",category:"スマホ・インターネット"},
  {word:"センター",easy:"中心施設・窓口",meaning:"特定の仕事や相談などを行う中心となる施設です。",example:"相談窓口にお越しください。",category:"防災・公共"},
  {word:"ダメージ",easy:"損害・傷み",meaning:"物や体、心などが受ける傷みや損害です。",example:"台風で建物が被害を受けました。",category:"防災・公共"},
  {word:"デザイン",easy:"見た目や使いやすさの設計",meaning:"物の見た目や使い方などを考えて形にすることです。",example:"文字が読みやすい形にしました。",category:"学校・社会"},
  {word:"トラベル",easy:"旅行",meaning:"いつもいる場所から別の場所へ出かけることです。",example:"来月、旅行に行きます。",category:"日常生活"},
  {word:"バリアフリー",easy:"使うときの障害を少なくすること",meaning:"高齢者や障害のある人などが移動や利用をしやすいよう、障害を減らすことです。",example:"入口に段差がないようにします。",category:"防災・公共"},
  {word:"バランス",easy:"つり合い",meaning:"いくつかのものの間で、偏りが大きくない状態です。",example:"食事のつり合いを考えましょう。",category:"医療・健康"},
  {word:"パフォーマンス",easy:"働きや成果",meaning:"人や機械などがどのくらいうまく働くか、またはその成果です。",example:"機械の動きや成果を確認します。",category:"仕事・手続き"},
  {word:"フィードバック",easy:"結果についての意見や助言",meaning:"行ったことに対して、改善に役立つ意見や助言を伝えることです。",example:"使った感想や改善案を教えてください。",category:"学校・社会"},
  {word:"プライバシー",easy:"個人の私生活や個人情報",meaning:"人にむやみに知られたくない私生活や個人に関する情報です。",example:"ほかの人の個人情報を公開しないでください。",category:"スマホ・インターネット"},
  {word:"ブランド",easy:"商品や会社を区別する名前や印",meaning:"商品やサービスをほかと区別するための名前や印です。",example:"商品名を確認してください。",category:"お金・買い物"},
  {word:"プレゼント",easy:"贈り物",meaning:"お祝いなどのために人へ贈る物です。",example:"友達に贈り物を渡しました。",category:"日常生活"},
  {word:"ペース",easy:"進む速さ",meaning:"物事を進める速さや調子です。",example:"自分に合う速さで歩いてください。",category:"医療・健康"},
  {word:"ポイント",easy:"大切な点・点数",meaning:"特に大切な部分や、買い物などで得られる点数を指します。",example:"大切な点を三つ説明します。",category:"お金・買い物"},
  {word:"ボランティア",easy:"自分から進んで行う手助け",meaning:"報酬を目的とせず、自分から進んで人や地域を助ける活動です。",example:"地域の清掃活動に参加します。",category:"学校・社会"},
  {word:"メニュー",easy:"料理の一覧・選べる項目",meaning:"料理の一覧や、機器の画面で選べる項目の一覧です。",example:"画面の一覧から設定を選んでください。",category:"日常生活"},
  {word:"モニター",easy:"画面・試しに使う人",meaning:"映像を映す画面、または商品などを試して意見を伝える人です。",example:"画面に案内が表示されます。",category:"スマホ・インターネット"},
  {word:"ユニバーサルデザイン",easy:"できるだけ多くの人が使いやすい設計",meaning:"年齢や障害の有無などにかかわらず、多くの人が使いやすいように考えた設計です。",example:"誰にとっても読みやすい案内を作ります。",category:"防災・公共"},
  {word:"ライフスタイル",easy:"暮らし方",meaning:"日々の生活の仕方や習慣です。",example:"自分の暮らし方に合う方法を選びます。",category:"日常生活"},
  {word:"リハビリ",easy:"体や生活の機能を取り戻すための練習",meaning:"病気やけがの後などに、体の動きや日常生活の力を回復させるために行う訓練です。",example:"専門家の指導で歩く練習をします。",category:"医療・健康"},
  {word:"ワクチン",easy:"病気を防ぐために使う薬",meaning:"特定の感染症などに対して、体が備えられるようにするものです。",example:"接種について医療機関に相談してください。",category:"医療・健康"},
  {word:"アレルギー",easy:"特定の物に体が強く反応すること",meaning:"食べ物や花粉などに対して、体が過敏に反応することです。",example:"食べ物のアレルギーを事前に伝えてください。",category:"医療・健康"},
  {word:"カウンセリング",easy:"相談しながら解決方法を考えること",meaning:"専門の人などと話し合い、悩みや問題を整理することです。",example:"悩みについて相談できます。",category:"医療・健康"},
  {word:"ケア",easy:"世話・手助け",meaning:"人や物の状態をよく保つために、世話や手助けをすることです。",example:"必要な介助や世話について相談します。",category:"医療・健康"},
  {word:"セラピー",easy:"心や体をよくするための方法",meaning:"心や体の健康を支えるために行う方法や活動です。",example:"専門家に適切な方法を相談してください。",category:"医療・健康"},
  {word:"チェックイン",easy:"到着を伝えて受付をすること",meaning:"ホテルなどに到着したことを伝え、利用の手続きをすることです。",example:"ホテルに着いたら受付をしてください。",category:"日常生活"},
  {word:"チェックアウト",easy:"利用を終えて手続きをすること",meaning:"ホテルなどを出るときに、支払いなどの手続きをすることです。",example:"出発前に受付で手続きをしてください。",category:"日常生活"},
  {word:"デリバリー",easy:"配達",meaning:"商品や食事などを指定された場所へ届けることです。",example:"食事を家まで届けてもらえます。",category:"日常生活"},
  {word:"テイクアウト",easy:"持ち帰り",meaning:"店で買った食べ物などを、店内で食べずに持ち帰ることです。",example:"食事を持ち帰りにできます。",category:"日常生活"},
  {word:"キャッシュレス",easy:"現金を使わない支払い",meaning:"現金ではなく、カードやスマートフォンなどで支払うことです。",example:"現金を使わずに支払えます。",category:"お金・買い物"},
  {word:"クレジットカード",easy:"後で支払うためのカード",meaning:"買い物の代金をカード会社が立て替え、後で支払う仕組みのカードです。",example:"カードで支払うことができます。",category:"お金・買い物"},
  {word:"チャージ",easy:"お金や電気を補充すること",meaning:"交通系カードなどにお金を入れたり、機器に電気をためたりすることです。",example:"カードに千円分のお金を入れます。",category:"お金・買い物"},
  {word:"ポイントカード",easy:"買い物で点数がたまるカード",meaning:"買い物などに応じて点数がたまり、特典に使えるカードです。",example:"会計のときにカードを見せてください。",category:"お金・買い物"},
  {word:"セール",easy:"特売・安売り",meaning:"商品をいつもより安い値段で販売することです。",example:"一部の商品を安く販売しています。",category:"お金・買い物"},
  {word:"リサイクルショップ",easy:"中古品を売り買いする店",meaning:"使われた品物などを買い取り、販売する店です。",example:"使わなくなった品物を店に売れます。",category:"お金・買い物"},
  {word:"エコ",easy:"環境への負担を減らすこと",meaning:"自然や環境への悪い影響を減らすことを指す言葉です。",example:"買い物にはくり返し使える袋を持参します。",category:"日常生活"},
  {word:"ハザードマップ",easy:"災害の危険がある場所を示した地図",meaning:"洪水や土砂災害などの危険がある場所や避難先を示した地図です。",example:"住んでいる地域の災害の危険を地図で確認しましょう。",category:"防災・公共"},
  {word:"アラート",easy:"警告・注意のお知らせ",meaning:"危険や大切な情報を知らせるための警告です。",example:"警告が出たら内容を確認してください。",category:"防災・公共"},
  {word:"アナウンス",easy:"お知らせ・放送",meaning:"大切な情報を多くの人に伝えることです。",example:"駅の放送を聞いてください。",category:"防災・公共"},
  {word:"エントリー",easy:"申し込み・参加登録",meaning:"大会や活動などに参加するために申し込むことです。",example:"参加する人は期限までに申し込んでください。",category:"仕事・手続き"},
  {word:"フォーム",easy:"入力用の用紙・画面",meaning:"名前や連絡先など、必要な情報を入力するための形式です。",example:"入力画面に名前と住所を書いてください。",category:"仕事・手続き"},
  {word:"リマインダー",easy:"忘れないためのお知らせ",meaning:"予定や作業を忘れないように、前もって知らせる機能や通知です。",example:"予約の前日にお知らせが届きます。",category:"スマホ・インターネット"},
  {word:"ステータス",easy:"現在の状態",meaning:"手続きや作業などが今どのような状態かを示す言葉です。",example:"申し込みがどこまで進んだか確認できます。",category:"仕事・手続き"},
  {word:"フィルター",easy:"必要なものを選び分ける機能",meaning:"条件に合う情報だけを表示するなど、情報を選び分ける仕組みです。",example:"日付で情報を絞り込んでください。",category:"スマホ・インターネット"},
  {word:"バージョン",easy:"製品やソフトの種類・版",meaning:"改良や変更によって分けられた製品やソフトの版です。",example:"新しい版に更新してください。",category:"スマホ・インターネット"},
  {word:"デフォルト",easy:"最初から設定されている状態",meaning:"自分で変更しない場合に使われる、最初の設定です。",example:"最初の設定のまま利用できます。",category:"スマホ・インターネット"},
  {word:"カスタマーサポート",easy:"利用者の相談窓口",meaning:"商品やサービスについて、利用者からの質問や困りごとに対応する窓口です。",example:"困ったときは利用者相談窓口に連絡してください。",category:"仕事・手続き"},
  {word:"アポイント",easy:"会う約束",meaning:"人と会う日時を前もって決めることです。",example:"担当者と会う日時を決めてください。",category:"仕事・手続き"},
  {word:"ミスマッチ",easy:"合わないこと・食い違い",meaning:"希望や条件などが、実際の内容とうまく合っていないことです。",example:"希望と内容が合っているか確認しましょう。",category:"仕事・手続き"},
  {word:"クレーム",easy:"苦情・不満の申し出",meaning:"商品やサービスなどについて、不満や問題を伝えることです。",example:"困ったことがあれば窓口に申し出てください。",category:"仕事・手続き"},
  {word:"アクシデント",easy:"思いがけない事故や出来事",meaning:"予想していなかった事故や困った出来事です。",example:"事故が起きたら係の人に知らせてください。",category:"防災・公共"},
  {word:"リモートワーク",easy:"離れた場所で働くこと",meaning:"会社などの決まった場所ではなく、自宅などから仕事をする働き方です。",example:"自宅から仕事をする日があります。",category:"仕事・手続き"},
  {word:"マネジメント",easy:"計画を立てて管理すること",meaning:"目標に向けて、人や時間、仕事の進み具合などを整えることです。",example:"仕事の予定や進み具合を管理します。",category:"仕事・手続き"},
  {word:"スーパー",easy:"食料品などを売る店",meaning:"食べ物や日用品などを、まとめて買える店です。",example:"帰りにスーパーで牛乳を買います。",category:"日常生活"},
  {word:"コンビニ",easy:"近くにあって、長い時間営業する小売店",meaning:"食べ物や日用品などを、長い時間買うことができる小さな店です。",example:"コンビニでお弁当を買いました。",category:"日常生活"},
  {word:"ドラッグストア",easy:"薬や日用品を売る店",meaning:"薬のほか、化粧品や日用品なども買える店です。",example:"ドラッグストアでせっけんを買います。",category:"日常生活"},
  {word:"レジ",easy:"買い物の会計をする場所",meaning:"店で商品の代金を計算し、支払いをする場所です。",example:"レジで代金を支払います。",category:"日常生活"},
  {word:"セルフレジ",easy:"自分で会計をする機械",meaning:"店員ではなく、買う人が自分で商品の読み取りや支払いをする機械です。",example:"セルフレジで会計を済ませました。",category:"日常生活"},
  {word:"クーポン",easy:"割引などを受けられる券",meaning:"商品やサービスを安く利用したり、特典を受けたりできる券や画面です。",example:"クーポンを使って割引してもらいました。",category:"日常生活"},
  {word:"バーコード",easy:"情報を線で表した印",meaning:"商品などを識別するために、太さの違う線で情報を表したものです。",example:"商品のバーコードを読み取ります。",category:"日常生活"},
  {word:"フリーサイズ",easy:"一つの大きさで幅広く使えるもの",meaning:"細かなサイズ分けをせず、幅広い人が使えるようにした大きさです。",example:"この帽子はフリーサイズです。",category:"日常生活"},
  {word:"ラッピング",easy:"贈り物を包むこと",meaning:"プレゼントなどを、紙や袋できれいに包むことです。",example:"プレゼント用にラッピングをお願いします。",category:"日常生活"},
  {word:"テーブル",easy:"食事や作業に使う台",meaning:"食事をしたり、物を置いたりするための台です。",example:"テーブルに料理を並べます。",category:"日常生活"},
  {word:"ソファ",easy:"座るための大きな椅子",meaning:"複数の人が座れることもある、クッションのある椅子です。",example:"ソファに座って本を読みます。",category:"日常生活"},
  {word:"キッチン",easy:"台所",meaning:"料理を作るための場所や設備です。",example:"キッチンで夕食を作ります。",category:"日常生活"},
  {word:"トイレ",easy:"便所",meaning:"用を足すための場所や設備です。",example:"駅のトイレを利用します。",category:"日常生活"},
  {word:"エレベーター",easy:"人や荷物を上下に運ぶ機械",meaning:"建物の中で、人や荷物を別の階へ運ぶ機械です。",example:"エレベーターで五階へ行きます。",category:"日常生活"},
  {word:"エスカレーター",easy:"人を乗せて動く階段",meaning:"人が乗ったまま、上や下の階へ移動できる動く階段です。",example:"エスカレーターでは歩かずに乗ります。",category:"日常生活"},
  {word:"リモコン",easy:"離れた場所から機器を操作する道具",meaning:"テレビやエアコンなどを、離れた場所から操作する道具です。",example:"リモコンでテレビを消します。",category:"日常生活"},
  {word:"エアコン",easy:"部屋の温度や湿度を調整する機械",meaning:"部屋を冷やしたり暖めたりして、過ごしやすい温度にする機械です。",example:"暑いのでエアコンをつけます。",category:"日常生活"},
  {word:"ドライヤー",easy:"髪を乾かす機械",meaning:"温風などを出して、ぬれた髪を乾かす電気製品です。",example:"お風呂のあとにドライヤーを使います。",category:"日常生活"},
  {word:"シャンプー",easy:"髪を洗うための液体や製品",meaning:"髪や頭皮の汚れを落とすために使う洗浄料です。",example:"シャンプーで髪を洗います。",category:"日常生活"},
  {word:"コンディショナー",easy:"髪を整えるための製品",meaning:"洗髪のあとに使い、髪の手触りやまとまりを整える製品です。",example:"髪を洗ったあとにコンディショナーを使います。",category:"日常生活"},
  {word:"スキンケア",easy:"肌の手入れ",meaning:"肌を清潔にしたり、乾燥を防いだりするための手入れです。",example:"毎日のスキンケアを続けています。",category:"日常生活"},
  {word:"メイク",easy:"化粧",meaning:"化粧品を使って、顔の見た目を整えることです。",example:"出かける前にメイクをします。",category:"日常生活"},
  {word:"アクセサリー",easy:"身につける飾り",meaning:"指輪やネックレスなど、身につけて飾る品物です。",example:"誕生日にアクセサリーをもらいました。",category:"日常生活"},
  {word:"バッグ",easy:"かばん",meaning:"物を入れて持ち運ぶための入れ物です。",example:"バッグに財布と鍵を入れます。",category:"日常生活"},
  {word:"スニーカー",easy:"運動にも使える歩きやすい靴",meaning:"底がやわらかく、歩いたり運動したりしやすい靴です。",example:"歩きやすいスニーカーを履きます。",category:"日常生活"},
  {word:"サンダル",easy:"足を覆う部分が少ない履物",meaning:"足を全部覆わず、ひもや帯などで足に固定する履物です。",example:"夏はサンダルを履くことがあります。",category:"日常生活"},
  {word:"レシート",easy:"買い物の内容や金額が書かれた紙",meaning:"店で買い物をしたときに、品物や金額などを記録して渡される紙です。",example:"レシートを受け取って保管します。",category:"日常生活"},
  {word:"ゴミ",easy:"いらなくなって捨てる物",meaning:"使い終わったり、必要なくなったりして捨てる物です。",example:"ゴミを分別して出します。",category:"日常生活"},
  {word:"スマートフォン",easy:"電話やインターネットなどが使える携帯電話",meaning:"通話だけでなく、写真撮影やインターネット、アプリの利用などができる小型の電話です。",example:"スマートフォンで地図を確認します。",category:"日常生活"},
  {word:"パンデミック",easy:"感染症が世界中に広がること",meaning:"感染症が国や地域をこえて、世界的に広がることです。",example:"パンデミックに備えて正しい情報を確認します。",category:"日常生活"},
  {word:"モーニング",easy:"朝の時間帯・朝食のサービス",meaning:"朝の時間帯や、喫茶店などで提供される朝食のセットを指します。",example:"喫茶店でモーニングを注文しました。",category:"日常生活"},
  {word:"ランチ",easy:"昼食",meaning:"昼に食べる食事のことです。",example:"友達とランチに行きます。",category:"日常生活"},
  {word:"ディナー",easy:"夕食",meaning:"夕方から夜に食べる食事のことです。",example:"家族とディナーを楽しみました。",category:"日常生活"},
  {word:"ドリンク",easy:"飲み物",meaning:"水やお茶、ジュースなど、飲むもののことです。",example:"好きなドリンクを選んでください。",category:"日常生活"},
  {word:"スイーツ",easy:"甘いお菓子やデザート",meaning:"ケーキやプリンなど、甘い食べ物のことです。",example:"食後にスイーツを食べました。",category:"日常生活"},
  {word:"リビング",easy:"居間",meaning:"家族などが集まり、くつろいで過ごす部屋です。",example:"リビングでテレビを見ます。",category:"日常生活"},
  {word:"クローゼット",easy:"服などをしまう収納場所",meaning:"服や小物などをしまっておく場所です。",example:"上着をクローゼットにしまいます。",category:"日常生活"},
  {word:"インテリア",easy:"部屋の家具や飾り",meaning:"部屋の中に置く家具や照明、飾りなどのことです。",example:"部屋のインテリアを変えました。",category:"日常生活"},
  {word:"クリーニング",easy:"衣類などを洗ってきれいにすること",meaning:"専門のお店などで、服や布製品を洗ったり整えたりすることです。",example:"コートをクリーニングに出します。",category:"日常生活"},
  {word:"コーディネート",easy:"服や物の組み合わせ",meaning:"服や小物、家具などを全体の調和を考えて組み合わせることです。",example:"服の色を合わせてコーディネートします。",category:"日常生活"},
  {word:"ファッション",easy:"服装や流行のスタイル",meaning:"服や靴、小物などを使った装いのことです。",example:"季節に合ったファッションを楽しみます。",category:"日常生活"},
  {word:"ショッピング",easy:"買い物",meaning:"お店やインターネットで商品を選んで買うことです。",example:"休日にショッピングをします。",category:"日常生活"},
  {word:"ショップ",easy:"店",meaning:"商品を売ったり、サービスを提供したりする店です。",example:"駅前のショップに立ち寄ります。",category:"日常生活"},
  {word:"サブスクリプション",easy:"定額料金で使い続けるサービス",meaning:"毎月や毎年など、決まった料金を払って商品やサービスを利用する仕組みです。",example:"動画のサブスクリプションを利用しています。",category:"日常生活"},
  {word:"デリカシー",easy:"相手の気持ちを思いやる細やかな心づかい",meaning:"相手の気持ちや立場を考えて、言葉や行動に気を配ることです。",example:"相手へのデリカシーを忘れないようにします。",category:"日常生活"},
  {word:"リラックス",easy:"緊張をといてくつろぐこと",meaning:"心や体の緊張をやわらげて、ゆったり過ごすことです。",example:"音楽を聞いてリラックスします。",category:"日常生活"},
  {word:"マッサージ",easy:"体をもんだり押したりする手当て",meaning:"手などで体をもんだり押したりして、こりをやわらげることです。",example:"肩を軽くマッサージしてもらいました。",category:"日常生活"},
  {word:"エクササイズ",easy:"健康のための運動",meaning:"体を動かして健康を保つために行う運動です。",example:"家で簡単なエクササイズをします。",category:"日常生活"},
  {word:"ウォーキング",easy:"歩く運動",meaning:"健康づくりなどのために、一定の時間歩く運動です。",example:"朝に近所をウォーキングします。",category:"日常生活"},
  {word:"ドライブ",easy:"車で出かけること",meaning:"車を運転して、景色や目的地を楽しみながら出かけることです。",example:"週末に家族とドライブに行きます。",category:"日常生活"},
  {word:"レンタカー",easy:"料金を払って借りる車",meaning:"一定の料金を払って、必要な時間だけ借りる車やそのサービスです。",example:"旅行先でレンタカーを借りました。",category:"日常生活"},
  {word:"チェックポイント",easy:"確認する大切な点",meaning:"忘れずに確認したい重要な場所や項目です。",example:"出発前のチェックポイントを確認します。",category:"日常生活"},
  {word:"サステナビリティ",easy:"将来まで続けられること",meaning:"環境や社会に配慮しながら、将来の世代も安心して暮らせる状態を目指す考え方です。",example:"資源を大切に使う取り組みを進めます。",category:"仕事・ビジネス"},
  {word:"ミッション",easy:"果たすべき役割や使命",meaning:"組織や人が、何のために活動するのかを表す大切な役割や目的です。",example:"私たちの使命を確認します。",category:"仕事・ビジネス"},
  {word:"ビジョン",easy:"目指す将来の姿",meaning:"組織や人が、将来どのような状態になりたいかを表したものです。",example:"会社が目指す将来の姿を共有します。",category:"仕事・ビジネス"},
  {word:"バリュー",easy:"大切にする価値観",meaning:"組織や人が判断や行動をするときに大切にする考え方です。",example:"職場で大切にする価値観を話し合います。",category:"仕事・ビジネス"},
  {word:"リーダーシップ",easy:"周りを導く力",meaning:"目標に向けて周りの人に働きかけ、チームをまとめて進める力です。",example:"話し合いを進める役割を担います。",category:"仕事・ビジネス"},
  {word:"KGI",easy:"最終的に達成したい目標",meaning:"活動の最後に達成したい成果を、数字などで表したものです。",example:"年度末に達成したい目標を決めます。",category:"仕事・ビジネス"},
  {word:"PDCA",easy:"計画・実行・確認・改善の流れ",meaning:"計画を立て、実行し、結果を確かめ、改善することを繰り返す方法です。",example:"仕事の進め方を振り返って改善します。",category:"仕事・ビジネス"},
  {word:"エンゲージメント",easy:"仕事や組織への前向きな関わり",meaning:"仕事や組織に対して、意欲や愛着を持って積極的に関わることです。",example:"働きやすい職場づくりについて話し合います。",category:"仕事・ビジネス"},
  {word:"リスキリング",easy:"新しい仕事に必要な技術を学び直すこと",meaning:"仕事の変化に合わせて、新しい知識や技術を学び直すことです。",example:"新しい業務に必要な技術を学びます。",category:"仕事・ビジネス"},
  {word:"リソース配分",easy:"人や時間などを割り振ること",meaning:"限られた人員、時間、お金などを、必要な仕事に振り分けることです。",example:"作業ごとに担当者と時間を割り振ります。",category:"仕事・ビジネス"},
  {word:"クロージング",easy:"商談や話し合いをまとめること",meaning:"商談などで相手の意思を確認し、合意や契約に結びつける段階です。",example:"提案内容を確認して合意を目指します。",category:"仕事・ビジネス"},
  {word:"オペレーション",easy:"業務を動かす手順や運営",meaning:"仕事やサービスを実際に動かすための作業や運営のことです。",example:"受付業務の手順を見直します。",category:"仕事・ビジネス"},
  {word:"アウトソーシング",easy:"仕事を外部に委託すること",meaning:"会社の仕事の一部を、専門の外部の会社などに任せることです。",example:"専門的な作業を外部に依頼します。",category:"仕事・ビジネス"},
  {word:"コスト",easy:"費用",meaning:"商品を作ったり仕事を進めたりするために必要なお金や費用です。",example:"必要な費用を見積もります。",category:"仕事・ビジネス"},
  {word:"コストパフォーマンス",easy:"費用に対する効果",meaning:"かけた費用に対して、どれくらいの効果や満足が得られるかという考え方です。",example:"費用と得られる効果を比べます。",category:"仕事・ビジネス"},
  {word:"ベンチマーク",easy:"比較や参考にする基準",meaning:"ほかの事例や標準的な数値など、比べるときの基準となるものです。",example:"他社の事例を参考に改善します。",category:"仕事・ビジネス"},
  {word:"マーケティング",easy:"商品やサービスが選ばれる仕組みを考えること",meaning:"相手が求めるものを調べ、商品やサービスを知ってもらい、選んでもらうための活動です。",example:"利用する人の希望を調べて商品を考えます。",category:"仕事・ビジネス"},
  {word:"ブランディング",easy:"選ばれるイメージを育てること",meaning:"商品や会社の特徴や価値を伝え、信頼や良い印象を築く活動です。",example:"会社の特徴が伝わる発信を続けます。",category:"仕事・ビジネス"},
  {word:"インセンティブ",easy:"やる気を高める報酬や仕組み",meaning:"目標に向かう意欲を高めるために用意される報酬や仕組みです。",example:"成果に応じた報奨制度を設けます。",category:"仕事・ビジネス"},
  {word:"エスカレーション",easy:"上の担当者や部署に引き継ぐこと",meaning:"自分だけで解決できない問題を、責任者や上位の担当者に報告して対応を求めることです。",example:"判断が難しい問題を責任者に報告します。",category:"仕事・ビジネス"},
  {word:"フレックスタイム",easy:"始業や終業の時刻を調整できる働き方",meaning:"決められた範囲の中で、働く人が始業や終業の時刻を選べる制度です。",example:"都合に合わせて出勤時刻を調整します。",category:"仕事・ビジネス"},
  {word:"ダッシュボード",easy:"大切な情報をまとめて見る画面",meaning:"仕事の進み具合や数値などを、一つの画面で確認できるようにしたものです。",example:"売上や目標の状況を一覧画面で確認します。",category:"仕事・ビジネス"},
  {word:"デッドライン",easy:"締め切り",meaning:"仕事や提出物などを終わらせなければならない期限です。",example:"資料の締め切りを確認します。",category:"仕事・ビジネス"}
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const categorySelect = document.getElementById("categorySelect");
const wordList = document.getElementById("wordList");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");
const featuredWords = document.getElementById("featuredWords");

const detailCategory = document.getElementById("detailCategory");
const detailWord = document.getElementById("detailWord");
const detailEasy = document.getElementById("detailEasy");
const detailMeaning = document.getElementById("detailMeaning");
const detailExample = document.getElementById("detailExample");
const speakButton = document.getElementById("speakButton");

let selectedWord = null;

function normalize(value) {
  return value.trim().toLocaleLowerCase("ja-JP");
}

function getFilteredWords() {
  const query = normalize(searchInput.value);
  const category = categorySelect.value;

  return dictionary.filter(item => {
    const matchesCategory = category === "すべて" || item.category === category;
    const searchableText = normalize(
      `${item.word} ${item.easy} ${item.meaning} ${item.example} ${item.category}`
    );
    return matchesCategory && (!query || searchableText.includes(query));
  });
}

function showDetails(item) {
  selectedWord = item;
  detailCategory.textContent = item.category;
  detailWord.textContent = item.word;
  detailEasy.textContent = item.easy;
  detailMeaning.textContent = item.meaning;
  detailExample.textContent = item.example;

  document.querySelectorAll(".word-item").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.word === item.word));
  });

  document.getElementById("detailCard").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderWords() {
  const filtered = getFilteredWords();
  wordList.replaceChildren();
  resultCount.textContent = `${filtered.length}語 / 全${dictionary.length}語`;
  emptyMessage.hidden = filtered.length !== 0;

  filtered.forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-item";
    button.dataset.word = item.word;
    button.setAttribute("aria-pressed", String(selectedWord?.word === item.word));

    const title = document.createElement("strong");
    title.textContent = item.word;
    const subtitle = document.createElement("span");
    subtitle.textContent = `${item.easy} ・ ${item.category}`;

    button.append(title, subtitle);
    button.addEventListener("click", () => showDetails(item));
    wordList.append(button);
  });

  if (filtered.length && (!selectedWord || !filtered.some(item => item.word === selectedWord.word))) {
    showDetails(filtered[0]);
  }
}

function renderFeatured() {
  const featured = ["インストール", "キャッシュレス", "キャンセル", "オンライン", "ハザードマップ", "バリアフリー"];
  featured.forEach(word => {
    const item = dictionary.find(entry => entry.word === word);
    if (!item) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-chip";
    button.textContent = word;
    button.addEventListener("click", () => {
      searchInput.value = word;
      categorySelect.value = "すべて";
      renderWords();
      const match = dictionary.find(entry => entry.word === word);
      if (match) showDetails(match);
    });
    featuredWords.append(button);
  });
}

function clearSearch() {
  searchInput.value = "";
  categorySelect.value = "すべて";
  renderWords();
  searchInput.focus();
}

searchButton.addEventListener("click", renderWords);
searchInput.addEventListener("input", renderWords);
categorySelect.addEventListener("change", renderWords);
clearButton.addEventListener("click", clearSearch);

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") renderWords();
});

speakButton.addEventListener("click", () => {
  if (!selectedWord) return;
  if (!("speechSynthesis" in window)) {
    alert("このブラウザーでは音声読み上げを利用できません。");
    return;
  }
  window.speechSynthesis.cancel();
  // 読み上げるのは「カタカナ英語」と「わかりやすい日本語」だけ
  const text = `${selectedWord.word}。${selectedWord.easy}。`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
});

renderFeatured();
renderWords();
